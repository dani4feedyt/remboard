"use client";

import { use } from "react"; // needed to unwrap params
import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";

interface BoardIdPageProps {
  params: Promise<{ boardId: string }>; // Next.js passes params as a Promise
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  const { boardId } = use(params);  

  return (
    <Room roomId={boardId}>
      <Canvas boardId={boardId} />
    </Room>
  );
};

export default BoardIdPage;
