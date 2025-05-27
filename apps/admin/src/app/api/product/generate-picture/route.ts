import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, description, category } = await request.json();
  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!process.env.OPENAI_URL_IMAGE || !process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_URL_IMAGE or OPENAI_API_KEY is not set" },
      { status: 500 },
    );
  }
  const response = await fetch(process.env.OPENAI_URL_IMAGE, {
    method: "POST",
    body: JSON.stringify({
      prompt: `A high-quality studio photo of an only single item of '${name}' of category '${category}' (${description}), isolated on a clean white background. Photorealistic, 4K resolution, soft ambient lighting, minimal shadows, high sharpness, professional product photography style, centered composition.`,
      negative_prompt:
        "multiple objects, group, duplicate, background, clutter, text, logo, watermark, blur, low quality, poor lighting, shadows on background, reflections, distorted glass, out of focus",
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      accept: "application/octet-stream",
    },
  });
  const data = await response.arrayBuffer();
  return new NextResponse(data, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": "inline; filename=image.png",
    },
  });
}
