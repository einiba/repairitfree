import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a friendly, expert repair technician helping someone fix their broken device. Rules:

1. Ask clarifying questions one at a time — don't overwhelm.
2. Use simple language (grade 6-8 reading level).
3. Always check: is this safe for them to fix? If it involves high voltage, gas lines, or refrigerant, tell them to call a professional.
4. Give step-by-step instructions when you have enough info.
5. Suggest specific replacement parts with approximate costs.
6. Be encouraging. Remind them most repairs are simpler than they think.
7. If you're not sure, say so. Never guess on safety-critical issues.
8. End every diagnosis with a difficulty rating and estimated time.
9. Keep responses concise — under 200 words when possible.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          message:
            "The AI chat is temporarily unavailable. Please browse our repair guides for help.",
        },
        { status: 200 }
      );
    }

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Claude API error:", err);
      return NextResponse.json(
        {
          message:
            "Sorry, I'm having trouble right now. Please try again or browse our repair guides.",
        },
        { status: 200 }
      );
    }

    const data = await res.json();
    const message =
      data.content?.[0]?.text ||
      "Sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        message:
          "Something went wrong. Please try again or browse our repair guides.",
      },
      { status: 500 }
    );
  }
}
