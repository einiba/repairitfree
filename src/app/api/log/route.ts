import { type NextRequest } from "next/server";
import { appendFile } from "fs/promises";
import { join } from "path";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, query, metadata } = body;

    if (!type || !query) {
      return Response.json({ error: "Missing type or query" }, { status: 400 });
    }

    const logEntry = JSON.stringify({
      type,
      query,
      metadata: metadata ?? null,
      timestamp: new Date().toISOString(),
    });

    const logPath = join(process.cwd(), "search-logs.jsonl");
    await appendFile(logPath, logEntry + "\n", "utf-8");

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Failed to log" }, { status: 500 });
  }
}
