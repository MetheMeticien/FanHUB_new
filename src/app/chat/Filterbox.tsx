import Image from "next/image";

export default function FilterBox() {
    return (
        <div className="flex flex-col gap-10 h-full pt-5">
            <div className="px-4 py-3 mx-6 bg-primary h-1/3 rounded-2xl">
                <h2 className=" font-sans text-gray-200 mb-8 font-bold text-xl">
                    Event Chats
                </h2>

                <div className="flex flex-col gap-2">
                <div className="flex items-center hover:bg-gray-600 rounded-md px-3">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/assets/messi.jpg"
                            alt="dp"
                            fill
                            className="rounded-full bg-cover"
                        />
                    </div>
                    <h2 className="font-sans text-sm text-gray-300 px-4">
                        Lionel Messi
                    </h2>
                </div>
                <div className="flex items-center hover:bg-gray-600 rounded-md px-3">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/assets/messi.jpg"
                            alt="dp"
                            fill
                            className="rounded-full bg-cover"
                        />
                    </div>
                    <h2 className="text-sm text-gray-300 px-4">
                        Lionel Messi
                    </h2>
                </div>
                <div className="flex items-center hover:bg-gray-600 rounded-md px-3">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/assets/messi.jpg"
                            alt="dp"
                            fill
                            className="rounded-full bg-cover"
                        />
                    </div>
                    <h2 className="text-sm text-gray-300 px-4">
                        Lionel Messi
                    </h2>
            
                </div>
                </div>
            </div>
        </div>
    );
}