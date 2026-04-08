import { type NextRequest } from "next/server";
import { cookies } from "next/headers";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const MAX_MESSAGES_PER_SESSION = 5;
const COOKIE_NAME = "repair_chat_count";

const SYSTEM_PROMPT = `You are a friendly, expert repair technician helping people fix their devices and appliances at home. Your name is RepairBot.

Key rules:
- Use simple, everyday language. Avoid jargon unless you explain it.
- SAFETY FIRST: Always mention relevant safety warnings (unplug devices, turn off water/gas, wear gloves, etc.) before any repair steps.
- Ask clarifying questions to narrow down the problem (model number, symptoms, when it started, any error codes).
- Once you have a diagnosis, suggest specific replacement parts with estimated costs.
- When mentioning parts, include a search link in this exact format: [Part Name on Amazon](https://www.amazon.com/s?k=SEARCH+TERMS&tag=repairitfree-20) and [Part Name on eBay](https://www.ebay.com/sch/i.html?_nkw=SEARCH+TERMS&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1)
- After diagnosing, suggest the user check our free repair guides at https://repairitfree.com/guides for step-by-step instructions.
- Keep responses concise but thorough. Use numbered steps for procedures.
- If a repair seems dangerous (gas lines, high voltage capacitors, refrigerant), recommend hiring a professional.
- Be encouraging — most repairs are easier than people think!`;

export async function POST(request: NextRequest) {
  if (!ANTHROPIC_API_KEY) {
    return Response.json(
      {
        reply:
          "The AI chat is temporarily unavailable. Please browse our [free repair guides](/guides) for help with your device.",
      },
      { status: 200 }
    );
  }

  const cookieStore = await cookies();
  const countCookie = cookieStore.get(COOKIE_NAME);
  const messageCount = countCookie ? parseInt(countCookie.value, 10) : 0;

  if (messageCount >= MAX_MESSAGES_PER_SESSION) {
    return Response.json(
      {
        reply:
          "You've used all 5 free questions for this session. Browse our [290+ free repair guides](/guides) for more help, or come back later!",
        remaining: 0,
        limitReached: true,
      },
      { status: 200 }
    );
  }

  try {
    const { messages } = await request.json();

    const anthropicMessages = messages.map(
      (m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })
    );

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: anthropicMessages,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Anthropic API error:", response.status, errorText);
      return Response.json(
        {
          reply:
            "Sorry, I'm having trouble right now. Please try again in a moment or browse our [repair guides](/guides).",
          remaining: MAX_MESSAGES_PER_SESSION - messageCount,
        },
        { status: 200 }
      );
    }

    const data = await response.json();
    const reply =
      data.content?.[0]?.text ??
      "Sorry, I couldn't generate a response. Please try again.";

    const newCount = messageCount + 1;
    cookieStore.set(COOKIE_NAME, String(newCount), {
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
      httpOnly: true,
      sameSite: "strict",
    });

    return Response.json({
      reply,
      remaining: MAX_MESSAGES_PER_SESSION - newCount,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      {
        reply:
          "Something went wrong. Please try again or check our [repair guides](/guides) for help.",
        remaining: MAX_MESSAGES_PER_SESSION - messageCount,
      },
      { status: 200 }
    );
  }
}
