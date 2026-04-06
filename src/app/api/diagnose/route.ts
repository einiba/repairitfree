import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an expert electronics and appliance repair technician. The user will describe a device problem. Provide a diagnosis in the following JSON format (no markdown, just raw JSON):

{
  "diagnosis": "2-3 sentence explanation of what's likely wrong",
  "difficulty": "Easy" or "Medium" or "Hard",
  "estimatedTime": "e.g., 20-30 minutes",
  "estimatedCost": "e.g., $10-$25",
  "steps": ["step 1 description", "step 2 description", ...],
  "safetyWarnings": ["warning 1", "warning 2"],
  "whenToCallPro": "honest assessment of when DIY isn't worth it"
}

Rules:
- Use simple language (grade 6-8 reading level)
- Be encouraging but honest about difficulty
- Always include safety warnings for electricity, gas, or water
- If the problem involves high voltage, gas lines, or refrigerant, set difficulty to "Hard" and emphasize calling a professional
- Keep steps concise but clear
- Provide realistic cost estimates`;

export async function POST(request: Request) {
  try {
    const { deviceType, brand, description } = await request.json();

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      // Return a mock response when no API key is configured
      return NextResponse.json({
        diagnosis:
          "Based on your description, this sounds like a common issue. Without the AI service active, I recommend browsing our repair guides or trying the troubleshooting steps below.",
        difficulty: "Medium",
        estimatedTime: "30-60 minutes",
        estimatedCost: "$10-$50",
        steps: [
          "Unplug the device and wait 5 minutes before starting any work.",
          "Check for obvious issues: loose connections, visible damage, or debris.",
          "Look up the specific error code or symptom in our repair guides.",
          "If the problem persists, consider checking online forums for your specific model.",
          "If you're not comfortable with the repair, consult a professional.",
        ],
        safetyWarnings: [
          "Always unplug electrical devices before working on them.",
          "If you smell gas or see sparking, stop immediately and call a professional.",
        ],
        whenToCallPro:
          "If the repair involves the compressor, gas lines, high-voltage components, or if you're unsure about any step, it's better to call a professional. Your safety is more important than saving money.",
      });
    }

    const userPrompt = [
      description,
      deviceType ? `Device type: ${deviceType}` : "",
      brand ? `Brand: ${brand}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2048,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!res.ok) {
      console.error("Claude API error:", await res.text());
      return NextResponse.json(
        { error: "AI service temporarily unavailable" },
        { status: 503 }
      );
    }

    const data = await res.json();
    const text = data.content?.[0]?.text || "";

    try {
      const parsed = JSON.parse(text);
      return NextResponse.json(parsed);
    } catch {
      return NextResponse.json(
        { error: "Failed to parse AI response" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Diagnose API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
