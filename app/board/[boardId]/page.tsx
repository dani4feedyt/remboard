"use client";

import { use } from "react"; // needed to unwrap params
import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
  params: Promise<{ boardId: string }>; // Next.js passes params as a Promise
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  const { boardId } = use(params);  

  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
};

export default BoardIdPage;
