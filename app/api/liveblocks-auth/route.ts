import { Liveblocks } from "@liveblocks/node";
import { NextRequest, NextResponse } from "next/server";

// Make sure you have your secret key in .env
// LIVEBLOCKS_SECRET_KEY=sk_prod_XXXX
const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    // Generate a random user ID for this example
    const userId = `user-${Math.floor(Math.random() * 1000)}`;

    // Prepare a Liveblocks session for this user   
    const session = liveblocks.prepareSession(userId);

    // Allow access to all rooms for testing
    session.allow("*", session.FULL_ACCESS);

    // Get the authorized session token
    const { status, body } = await session.authorize();

    return new NextResponse(body, {     
      status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Liveblocks auth error:", err);
    return NextResponse.json({ error: "Liveblocks auth failed" }, { status: 500 });
  }
}
