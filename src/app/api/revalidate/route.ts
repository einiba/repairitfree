import { NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidation-secret')
  if (secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ error: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { paths } = body // array of paths like ['/guides/washing-machines/samsung/not-draining']

    if (paths && Array.isArray(paths)) {
      for (const path of paths) {
        revalidatePath(path)
      }
    } else {
      // Revalidate everything
      revalidatePath('/', 'layout')
    }

    return Response.json({ revalidated: true, paths })
  } catch {
    return Response.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}
