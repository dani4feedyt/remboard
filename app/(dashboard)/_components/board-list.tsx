"use client";

import Image from "next/image";
import { EmptyBoards } from "./empty-boards";

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    };
};

export const BoardList = ({
    orgId,
    query,
}: BoardListProps) => {
    const data = [];

    if (!data?.length && query.search) {
        return (
            <div className="h-full flex flex-col items-center justify-center">
                <Image 
                    src="/elements.svg"
                    alt="Empty"
                    height={200}
                    width={200}         
                />
                <h2 className="text-2xl font-semibold mt-6">
                    John Cabbage was here...
                </h2>
                <p className="text-muted-foreground textg-sm mt-2">
                    ...but left, so try a different search
                </p>
            </div>
        );
    }

    if (!data?.length && query.favorites) {
        return (
            <div className="h-full flex flex-col items-center justify-center">
                <Image 
                    src="/elements.svg"
                    alt="Empty"
                    height={200}
                    width={200}         
                />
                <h2 className="text-2xl font-semibold mt-6">
                    You have no favorites.
                </h2>
                <p className="text-muted-foreground textg-sm mt-2">
                    Tough guy, ain't ya?
                </p>
            </div>
        );
    }

    if (!data?.length) {
        return <EmptyBoards />
    }

    return (
        <div>
            {JSON.stringify(query)}
        </div>
    );
};