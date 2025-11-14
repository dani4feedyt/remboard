"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

import Image from "next/image";

import { Loading } from "@/components/auth/loading";
import { EmptyBoards } from "./empty-boards";
import { BoardCard } from "./board-card";
import { NewBoardButton } from "./new-board-button";

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
    const data = useQuery(api.boards.get, { 
        orgId,
        ...query,
    });

    if (data === undefined) {
        return <Loading />
    }

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
            <h2 className="text-3xl">
                {query.favorites ? "Favorite boards" : "Team boards"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
            lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                <NewBoardButton orgId={orgId} />
                {data?.map((board) => (
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        authorName={board.authorName}
                        createdAt={board._creationTime}
                        orgId={board.orgId}
                        isFavorite={board.isFavorite}
                    />
                ))}
            </div>
        </div>
    );
};