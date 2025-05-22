import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, category } = await request.json();
  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!process.env.OPENAI_URL || !process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_URL or OPENAI_API_KEY is not set" },
      { status: 500 },
    );
  }
  const payload = {
    max_tokens: 512,
    messages: [
      {
        content: `Génère une courte description pour un produit de nom ${name}${category ? ` pour la catégorie ${category}` : ""}, entre 150 et 200 caractères`,
        role: "user",
      },
    ],
    model: "Meta-Llama-3_3-70B-Instruct",
    temperature: 0,
  };
  const response = await fetch(process.env.OPENAI_URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });
  const data = await response.json();
  return NextResponse.json({ description: data.choices[0].message.content });
}
