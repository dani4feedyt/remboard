"use client";

import { useEffect } from "react";
import {
  useMyPresence,
  useOthers,
  useStorage,
  useMutation,
  ClientSideSuspense,
} from "@liveblocks/react";
import { LiveObject } from "@liveblocks/client";

interface CanvasProps {
  boardId: string;
}

// Minimal Layer type
type Layer = { id: string };

export const Canvas = ({ boardId }: CanvasProps) => {
  const [myPresence, setMyPresence] = useMyPresence();
  const others = useOthers();

  // Read-only snapshots
  const layerIds = useStorage((root) => root.layerIds); // readonly string[]
  const layers = useStorage((root) => root.layers);     // LiveMap snapshot (readonly)

  // Set initial presence
  useEffect(() => {
    setMyPresence({
      selection: [],
      cursor: { x: 0, y: 0 },
      pencilDraft: null,
      penColor: null,
    });
  }, [setMyPresence]);

  // Mutation to add a dummy layer
  const addDummyLayer = useMutation(
    ({ storage }) => {
      const liveLayerIds = storage.get("layerIds"); // LIVE LiveList
      const liveLayers = storage.get("layers");     // LIVE LiveMap

      if (liveLayerIds.length === 0) {
        liveLayerIds.push("test-layer");
        liveLayers.set("test-layer", new LiveObject({ id: "test-layer" }));
      }
    },
    []
  );

  // Add dummy layer once storage is loaded
  useEffect(() => {
    if (layerIds && layers) {
      addDummyLayer();
    }
  }, [layerIds, layers, addDummyLayer]);

  if (!layerIds || !layers) {
    return <div>Loading canvas...</div>;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f0f0f0",
        position: "relative",
      }}
    >
      <h2 style={{ position: "absolute", top: 10, left: 10 }}>
        Minimal Canvas - Users connected: {others.length + 1}
      </h2>

      {/* Render dummy layer if it exists */}
      {layerIds.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: 50,
            left: 10,
            width: 50,
            height: 50,
            background: "blue",
          }}
        />
      )}
    </div>
  );
};
