import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoards = () => {
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
                <Button size="lg">
                    New board
                </Button>

            </div>

        </div>
    );
};