import Navbar from "@/Navbar/navbar";
import type { ReactNode } from "react";
import LeftBar from "../Left_Bar/left_bar";
import Dock from "../Dock/Dock";
import Right_bar from "../Right_Bar/right_bar";
import { SelectedUserProvider } from "@/context/SelectedUserContext"; // Adjust the import path

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const following = [
        { imageUrl: "/assets/messi.jpg", name: "Lionel Messi" },
        { imageUrl: "/assets/ronaldo.jpg", name: "Cristiano Ronaldo" },
        { imageUrl: "/assets/bruno_mars.jpg", name: "Neymar Jr" },
        { imageUrl: "/assets/antony.jpeg", name: "Antony Matheus" },
        { imageUrl: "/assets/taylor_swift.jpg", name: "Taylor Swift" },
        { imageUrl: "/assets/profile_pic.jpg", name: "Ruhan" },
    ];

    return (
        <SelectedUserProvider>
            <div>
                <Navbar />
                <div className="flex min-h-screen mt-7">
                    <aside className="hidden xl:block xl:w-1/5 2xl:mx-6 bg-background">
                        <LeftBar following={following} />
                    </aside>

                    <main className="flex-1 bg-background rounded-xl">
                        {children}
                        <Dock />
                    </main>
                </div>
            </div>
        </SelectedUserProvider>
    );
}