// import {Canvas} from "./_components/canvas"
// import {Room } from "@/components/room"

// interface BoardIdPageProps {
//     params:{
//         boardId:string
//     }
// }

// const BoardIdPage =({
//     params,
// }:BoardIdPageProps)=>{
//     return (
//         <Room roomId={params.boardId}>
//             <Canvas boardId={params.boardId}/>
//         </Room>
//     )
// }

// export default BoardIdPage


// import { Room } from "@/components/room";
// import { CollaborativeApp } from "@/app/board/[boardId]/_components/CollaborativeApp";

// export default function Page() {
//   return (
//     <Room>
//       <CollaborativeApp />
//     </Room>
//   );
// }                                              12213231231332321231231213232323123

import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
  params: { boardId: string };
}

export default function BoardIdPage({ params }: BoardIdPageProps) {
  return (
    <Room roomId={params.boardId}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
}
