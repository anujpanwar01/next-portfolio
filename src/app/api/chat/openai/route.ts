import OpenAI from "openai";
import { NextResponse } from "next/server";

const OPEN_AI = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
    try {
        const { prompt, model } = await req.json();

        if (!prompt || !model) {
            return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
        }

        const response = await OPEN_AI.chat.completions.create({
            model,
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            store: true,
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
