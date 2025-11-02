"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { api } from "@/convex/_generated/api"
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

export const EmptyBoards = () => {
    const { organization } = useOrganization(); 
    const { mutate, pending } = useApiMutation(api.board.create);

    const onClick = () => {
        if (!organization) return;

        mutate({
            orgId: organization.id,
            title: "Untitled"
        })
         .then((id) => {
            toast.success("Your beautiful board was created!");
         })
         .catch(() => toast.error("Board creation went horribly wrong"));
    };

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
                src="/elements.svg"
                alt="Empty"
                height={180}
                width={180}         
            />
            <h2 className="text-2xl font-semibold mt-6">
                Cabbage stole all of your boards(?)
            </h2>
            <p className="text-muted-foreground textg-sm mt-2">
                Create the new one for organization!
            </p>

            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size="lg">
                    New board
                </Button>

            </div>

        </div>
    );
};