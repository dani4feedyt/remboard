import { Liveblocks } from "@liveblocks/node";
import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { currentUser,auth } from "@clerk/nextjs/server";
import { request } from "http";

// Make sure you have your secret key in .env
// LIVEBLOCKS_SECRET_KEY=sk_prod_XXXX
const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

const convex = new ConvexHttpClient (
  process.env.NEXT_PUBLIC_CONVEX_URL!
)

export async function POST(req: NextRequest) {
  try {

    const authorization = await auth()
    const user = await currentUser()

    

    if (!authorization || !user) {
      return new Response("Unauthorized",{status:403})
    }

    const {room} = await req.json()
    const board = await convex.query(api.board.get,{id:room})



    if (board?.orgId !== authorization.orgId){
      return new Response("Unauthorized", {status:403})
    }

    const userInfo = {
      name: user.firstName!,
      picture: user.imageUrl!,
    }

    

    // Generate a random user ID for this example
    const userId = `user-${Math.floor(Math.random() * 1000)}`;

    // Prepare a Liveblocks session for this user   
    const session = liveblocks.prepareSession(userId,{userInfo});

    if(room){
      session.allow("*", session.FULL_ACCESS);
    }
    
  
    // Get the authorized session token
    const { status, body } = await session.authorize();
    

    return new NextResponse(body, {     
      status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    
    return NextResponse.json({ error: "Liveblocks auth failed" }, { status: 500 });
  }
}
