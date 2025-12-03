"use client";

import { ReactNode } from "react";
import { LiveblocksProvider } from "@liveblocks/react";
import { Toaster } from "@/components/ui/sonner";
import ConvexClientProvider from "@/providers/convex-client-provider";
import ProtectedRoute from "@/components/protected-route";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";

interface Props {
  children: ReactNode;
}

export default function ClientProviders({ children }: Props) {
  return (
    <ClerkProvider>
      <ConvexClientProvider>
        <LiveblocksProvider authEndpoint="/api/liveblocks-auth" throttle={16}>
          <Toaster />
          <ModalProvider />
          <ProtectedRoute>{children}</ProtectedRoute>
        </LiveblocksProvider>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}