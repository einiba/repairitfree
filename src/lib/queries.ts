import { prisma } from './db'
import type { Guide, Part, RepairStep, DeviceCategory, ErrorCode } from './types'

// ---------------------------------------------------------------------------
// Shared include for fetching parts + steps with every guide
// ---------------------------------------------------------------------------
const guideInclude = {
  parts: { orderBy: { sortOrder: 'asc' as const } },
  steps: { orderBy: { stepNumber: 'asc' as const } },
}

// ---------------------------------------------------------------------------
// Transform a Prisma guide (with relations) into the app-level Guide type
// ---------------------------------------------------------------------------
function toGuide(dbGuide: any): Guide {
  const partsNeeded: Part[] = (dbGuide.parts ?? []).map((p: any) => ({
    name: p.name,
    costRange: p.costRange,
    amazonUrl: p.amazonUrl ?? undefined,
    ebayUrl: p.ebayUrl ?? undefined,
    ifixitUrl: p.ifixitUrl ?? undefined,
  }))

  const steps: RepairStep[] = (dbGuide.steps ?? []).map((s: any) => ({
    number: s.stepNumber,
    title: s.title,
    description: s.description,
    imageUrl: s.imageUrl ?? undefined,
  }))

  return {
    id: dbGuide.id,
    category: dbGuide.category,
    categorySlug: dbGuide.categorySlug,
    brand: dbGuide.brand,
    brandSlug: dbGuide.brandSlug,
    problemSlug: dbGuide.problemSlug,
    problemTitle: dbGuide.problemTitle,
    difficulty: dbGuide.difficulty as Guide['difficulty'],
    timeEstimate: dbGuide.timeEstimate,
    costEstimate: dbGuide.costEstimate,
    toolsNeeded: dbGuide.toolsNeeded,
    partsNeeded,
    safetyWarnings: dbGuide.safetyWarnings,
    quickDiagnosis: dbGuide.quickDiagnosis,
    steps,
    alternativeCauses: dbGuide.alternativeCauses,
    whenToCallPro: dbGuide.whenToCallPro,
    metaTitle: dbGuide.metaTitle,
    metaDescription: dbGuide.metaDescription,
    youtubeId: dbGuide.youtubeId ?? undefined,
  }
}

// ---------------------------------------------------------------------------
// Single guide lookup
// ---------------------------------------------------------------------------
export async function getGuide(
  categorySlug: string,
  brandSlug: string,
  problemSlug: string,
): Promise<Guide | null> {
  const row = await prisma.guide.findUnique({
    where: {
      categorySlug_brandSlug_problemSlug: {
        categorySlug,
        brandSlug,
        problemSlug,
      },
    },
    include: guideInclude,
  })
  return row ? toGuide(row) : null
}

// ---------------------------------------------------------------------------
// All guides in a category
// ---------------------------------------------------------------------------
export async function getGuidesByCategory(categorySlug: string): Promise<Guide[]> {
  const rows = await prisma.guide.findMany({
    where: { categorySlug },
    include: guideInclude,
  })
  return rows.map(toGuide)
}

// ---------------------------------------------------------------------------
// Guides by brand within a category
// ---------------------------------------------------------------------------
export async function getGuidesByBrand(
  categorySlug: string,
  brandSlug: string,
): Promise<Guide[]> {
  const rows = await prisma.guide.findMany({
    where: { categorySlug, brandSlug },
    include: guideInclude,
  })
  return rows.map(toGuide)
}

// ---------------------------------------------------------------------------
// Distinct brands for a category
// ---------------------------------------------------------------------------
export async function getBrandsForCategory(
  categorySlug: string,
): Promise<{ name: string; slug: string }[]> {
  const rows = await prisma.guide.findMany({
    where: { categorySlug },
    select: { brand: true, brandSlug: true },
    distinct: ['brandSlug'],
    orderBy: { brand: 'asc' },
  })
  return rows.map((r) => ({ name: r.brand, slug: r.brandSlug }))
}

// ---------------------------------------------------------------------------
// Related: same brand + category, excluding current guide
// ---------------------------------------------------------------------------
export async function getGuidesSameBrandCategory(
  categorySlug: string,
  brandSlug: string,
  excludeId: string,
): Promise<Guide[]> {
  const rows = await prisma.guide.findMany({
    where: {
      categorySlug,
      brandSlug,
      id: { not: excludeId },
    },
    include: guideInclude,
  })
  return rows.map(toGuide)
}

// ---------------------------------------------------------------------------
// Related: same problem, different brands
// ---------------------------------------------------------------------------
export async function getGuidesSameProblem(
  problemSlug: string,
  excludeBrandSlug: string,
  excludeId: string,
): Promise<Guide[]> {
  const rows = await prisma.guide.findMany({
    where: {
      problemSlug,
      brandSlug: { not: excludeBrandSlug },
      id: { not: excludeId },
    },
    include: guideInclude,
  })
  return rows.map(toGuide)
}

// ---------------------------------------------------------------------------
// Related: popular in category (deterministic pseudo-shuffle, exclude already-shown)
// ---------------------------------------------------------------------------
export async function getGuidesPopularCategory(
  categorySlug: string,
  excludeIds: Set<string>,
): Promise<Guide[]> {
  const rows = await prisma.guide.findMany({
    where: {
      categorySlug,
      id: { notIn: Array.from(excludeIds) },
    },
    include: guideInclude,
  })

  // Deterministic pseudo-shuffle matching the original static implementation
  return rows
    .map(toGuide)
    .sort((a, b) => {
      const hashA = a.id.split('').reduce((s, c) => s + c.charCodeAt(0), 0)
      const hashB = b.id.split('').reduce((s, c) => s + c.charCodeAt(0), 0)
      return hashA - hashB
    })
}

// ---------------------------------------------------------------------------
// Total guide count
// ---------------------------------------------------------------------------
export async function getAllGuideCount(): Promise<number> {
  return prisma.guide.count()
}

// ---------------------------------------------------------------------------
// All slugs (for sitemap generation)
// ---------------------------------------------------------------------------
export async function getAllGuideSlugs(): Promise<
  { categorySlug: string; brandSlug: string; problemSlug: string }[]
> {
  return prisma.guide.findMany({
    select: { categorySlug: true, brandSlug: true, problemSlug: true },
  })
}

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------
export async function getCategories(): Promise<DeviceCategory[]> {
  const rows = await prisma.category.findMany({ orderBy: { name: 'asc' } })
  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    slug: r.slug,
    icon: r.icon,
    description: r.description,
  }))
}

export async function getCategoryGuideCounts(): Promise<Record<string, number>> {
  const rows = await prisma.guide.groupBy({
    by: ['categorySlug'],
    _count: { id: true },
  })
  const counts: Record<string, number> = {}
  for (const r of rows) {
    counts[r.categorySlug] = r._count.id
  }
  return counts
}

// ---------------------------------------------------------------------------
// Full-text search (Postgres ts_vector)
// ---------------------------------------------------------------------------
export async function searchGuides(query: string, limit = 20): Promise<Guide[]> {
  if (!query.trim()) return []

  // Raw query to leverage the search_vector column with ts_rank ordering.
  // Falls back to ILIKE on brand / problem_title for partial matches.
  const ids: { id: string }[] = await prisma.$queryRawUnsafe(
    `SELECT id
     FROM guides
     WHERE search_vector @@ plainto_tsquery('english', $1)
        OR brand ILIKE '%' || $1 || '%'
        OR problem_title ILIKE '%' || $1 || '%'
     ORDER BY ts_rank(search_vector, plainto_tsquery('english', $1)) DESC
     LIMIT $2`,
    query,
    limit,
  )

  if (ids.length === 0) return []

  const rows = await prisma.guide.findMany({
    where: { id: { in: ids.map((r) => r.id) } },
    include: guideInclude,
  })

  // Preserve the rank ordering from the raw query
  const idOrder = new Map(ids.map((r, i) => [r.id, i]))
  rows.sort((a, b) => (idOrder.get(a.id) ?? 0) - (idOrder.get(b.id) ?? 0))

  return rows.map(toGuide)
}

// ---------------------------------------------------------------------------
// Error codes
// ---------------------------------------------------------------------------
export async function getErrorCode(
  deviceTypeSlug: string,
  codeSlug: string,
): Promise<ErrorCode | null> {
  const row = await prisma.errorCode.findUnique({
    where: { deviceTypeSlug_codeSlug: { deviceTypeSlug, codeSlug } },
  })
  if (!row) return null
  return {
    id: row.id,
    deviceType: row.deviceType,
    deviceTypeSlug: row.deviceTypeSlug,
    code: row.code,
    codeSlug: row.codeSlug,
    meaning: row.meaning,
    guideId: row.guideId ?? undefined,
  }
}

export async function getErrorCodesByDevice(
  deviceTypeSlug: string,
): Promise<ErrorCode[]> {
  const rows = await prisma.errorCode.findMany({
    where: { deviceTypeSlug },
    orderBy: { code: 'asc' },
  })
  return rows.map((r) => ({
    id: r.id,
    deviceType: r.deviceType,
    deviceTypeSlug: r.deviceTypeSlug,
    code: r.code,
    codeSlug: r.codeSlug,
    meaning: r.meaning,
    guideId: r.guideId ?? undefined,
  }))
}

export async function getDeviceTypes(): Promise<
  { deviceType: string; deviceTypeSlug: string }[]
> {
  const rows = await prisma.errorCode.findMany({
    select: { deviceType: true, deviceTypeSlug: true },
    distinct: ['deviceTypeSlug'],
    orderBy: { deviceType: 'asc' },
  })
  return rows.map((r) => ({
    deviceType: r.deviceType,
    deviceTypeSlug: r.deviceTypeSlug,
  }))
}

// ---------------------------------------------------------------------------
// Search logging
// ---------------------------------------------------------------------------
export async function logSearch(
  type: string,
  query: string,
  metadata?: any,
): Promise<void> {
  await prisma.searchLog.create({
    data: {
      type,
      query,
      metadata: metadata ?? undefined,
    },
  })
}
