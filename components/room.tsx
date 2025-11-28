// "use client";

// import { ReactNode } from "react";
// import {
//   LiveblocksProvider,
//   RoomProvider,
//   ClientSideSuspense,
// } from "@liveblocks/react/suspense";

// export function Room({ children }: { children: ReactNode }) {
//   return (
//     <LiveblocksProvider publicApiKey={"pk_dev_XCHy5JWM4-Y-hhHhnI1RMoHVNjS9yoRNWE-twC8aO9P_mydvay9XVk9CVWkjWYgk"}>
//       <RoomProvider id="my-room">
//         <ClientSideSuspense fallback={<div>Loading…</div>}>
//           {children}
//         </ClientSideSuspense>
//       </RoomProvider>
//     </LiveblocksProvider>
//   );
// }



// "use client"

// import {ReactNode} from "react"
// import { ClientSideSuspense } from "@liveblocks/react"

// import { RoomProvider } from "@liveblocks/react"


// interface RoomProps {
//   children :ReactNode
//   roomId : string
// }


// export const Room = ({
//   children,
//   roomId
// }:RoomProps)=>{
//   return(
//     <RoomProvider id={roomId} initialPresence={{}}>
//       <ClientSideSuspense fallback={<div>Loading...</div>}>
//          {children}
//       </ClientSideSuspense>
//     </RoomProvider>
//   )
// }

"use client";

import { ReactNode, PropsWithChildren } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

interface RoomProps extends PropsWithChildren {
  roomId: string;
}

export function Room({ children, roomId }: RoomProps) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_XCHy5JWM4-Y-hhHhnI1RMoHVNjS9yoRNWE-twC8aO9P_mydvay9XVk9CVWkjWYgk"
      }
    >
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}



