import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";

declare global {
  interface Liveblocks {
    Presence: {
      selection: string[];
      cursor: { x: number; y: number } | null;
      pencilDraft: [x: number, y: number, pressure: number][] | null;
      penColor: string | null;
    };
    Storage: {
      layers: LiveMap<string, LiveObject<any>>;
      layerIds: LiveList<string>;
    };
  }
}

export {};
