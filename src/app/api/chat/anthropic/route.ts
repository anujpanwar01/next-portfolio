import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function POST(req: Request) {
    try {
        const { prompt, model } = await req.json();

        if (!prompt || !model) {
            return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
        }

        const response = await anthropic.messages.create({
            model,
            max_tokens: 1024,
            messages: [{ role: "user", content: prompt }],
        });

        return NextResponse.json(response);
    } catch (e) {
        let errorMsg = "Failed to fetch";
        if (e instanceof Error) {
            errorMsg = e.message;
        }
        return NextResponse.json({ error: errorMsg }, { status: 500 });
    }
}
