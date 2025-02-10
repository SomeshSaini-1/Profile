import { NextResponse } from "next/server";

export const dynamic = "force-static"; // Ensuring the page is statically generated
export const revalidate = 10; // Revalidate the static page every 10 seconds

export async function GET() {
  return NextResponse.json({ message: "Hello from App Router API!" });
}

export function PUT(req) {
  return NextResponse.json({ text: 'Hello' });
}

export async function POST(req) {
  const data = await req.json();
  return NextResponse.json({
    data,
  });
}

// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ message: "Hello from App Router API!" });
// }

// export function PUT(req) {
//  return NextResponse.json({ text: 'Hello' });
// }

// export async function POST(res) {
//   const data = await res.json();
//   return NextResponse.json({
//     data,
//   })
// }
