"use client";

import { useOthers } from "@liveblocks/react/suspense";

interface CanvasProps {
  boardId: string;
}

export function Canvas({ boardId }: CanvasProps) {
  const others = useOthers();
  const userCount = others.length;

  return (
    <div>
      <h2>Board: {boardId}</h2>
      <p>There are {userCount} other user(s) online</p>
      {/* Здесь можно добавить whiteboard / рисование */}
    </div>
  );
}
