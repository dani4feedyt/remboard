import Image from "next/image";

export const EmptyOrg = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
                src="/elements.svg"
                alt="Empty"
                height={200}
                width={200}         
            />
            <h2 className="text-2xl font-semibold mt-6">
                This board appears as blanc to me
                    
            </h2>
            <p>
                Create the board, but take it slow...
            </p>
        </div>
    );
};