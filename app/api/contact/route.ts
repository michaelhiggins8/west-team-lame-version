import { NextResponse } from "next/server";
import { sendContactInquiry } from "@/lib/contact";

export const runtime = "nodejs";

function getClientIp(request: Request): string | null {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || null;
  }
  return request.headers.get("x-real-ip");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const result = await sendContactInquiry(body, {
    ip: getClientIp(request),
  });

  if (result.ok) {
    return NextResponse.json({ ok: true });
  }

  const status =
    result.code === "validation"
      ? 400
      : result.code === "rate_limit"
        ? 429
        : 503;

  return NextResponse.json(
    {
      ok: false,
      message: result.message,
      fields: result.fields,
    },
    { status },
  );
}
