import { NextRequest } from 'next/server'
import { logSearch } from '@/lib/queries'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, query, metadata } = body

    if (!type || !query) {
      return Response.json({ error: 'Missing type or query' }, { status: 400 })
    }

    await logSearch(type, query, metadata)
    return Response.json({ ok: true })
  } catch {
    return Response.json({ error: 'Failed to log' }, { status: 500 })
  }
}
