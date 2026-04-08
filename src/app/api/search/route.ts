import { NextRequest } from 'next/server'
import { searchGuides } from '@/lib/queries'

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get('q')
  if (!q || q.trim().length < 2) return Response.json([])

  const results = await searchGuides(q.trim(), 8)

  // Return only the fields needed by SearchAutocomplete
  return Response.json(results.map(g => ({
    id: g.id,
    brand: g.brand,
    category: g.category,
    categorySlug: g.categorySlug,
    brandSlug: g.brandSlug,
    problemSlug: g.problemSlug,
    problemTitle: g.problemTitle,
    quickDiagnosis: g.quickDiagnosis.slice(0, 150),
    difficulty: g.difficulty,
    timeEstimate: g.timeEstimate,
    costEstimate: g.costEstimate,
  })))
}
