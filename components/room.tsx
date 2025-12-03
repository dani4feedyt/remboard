"use client";

import { RoomProvider, ClientSideSuspense } from "@liveblocks/react";
import { LiveMap, LiveList, LiveObject } from "@liveblocks/client";
import React, { ReactNode } from "react";
import { Canvas } from "@/app/board/[boardId]/_components/canvas"; // your Canvas component
import { Layer } from "@/types/canvas";

interface RoomProps {   
  children?: ReactNode;
  roomId: string;
  fallback:   NonNullable<ReactNode> | null;
}   

export const Room = ({ children, roomId,fallback }: RoomProps) => {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        selection: [],
        cursor: null,
        pencilDraft: null,
        penColor: null,
      }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList([]), // empty array, ensures LiveList is properly initialized
      }}
    >
      {/* Ensure storage is loaded before rendering children */}
      <ClientSideSuspense fallback={fallback}>
        {children || <Canvas boardId={roomId} />}
      </ClientSideSuspense>
    </RoomProvider>
  );
};
