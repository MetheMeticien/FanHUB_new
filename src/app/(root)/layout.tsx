import Navbar from "@/Navbar/navbar";
import type { ReactNode } from "react";
import Left_bar from "../Left_Bar/left_bar";
import Dock from "../Dock/Dock";
import Right_bar from "../Right_Bar/right_bar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
        <Navbar />
        <div className="flex min-h-screen mt-7">


          <aside className="hidden xl:block xl:w-1/5 2xl:w-1/6 2xl:mx-6 bg-background">
            <Left_bar/>
          </aside>


          <main className='flex-1 bg-background'>

            {children}
            <Dock />
          </main>

          <aside className="hidden xl:block xl:w-1/5 2xl:w-1/6 2xl:mx-6 bg-background">
            <Right_bar/>
          </aside>
        </div>
    </div>
  );
}
