

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from App Router API!" });
}

export function PUT(req) {
 return NextResponse.json({ text: 'Hello' });
}

export async function POST(res) {
  const data = await res.json();
  return NextResponse.json({
    data,
  })
}