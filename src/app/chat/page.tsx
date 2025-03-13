"use client"

import Image from "next/image";
import { useQuery } from "convex/react";
import {api} from "~/convex/_generated/api"
import {Button} from "@/components/ui/button"
import ChatBox from "./chatbox";
import Navbar from "@/Navbar/navbar";
import FilterBox from "./Filterbox";

export default function ChatApp() {
    
    return (
        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        //   {names?.map(({ name, id }) => <div className="text-white" key={name}>{id}</div>)}
        // </main>

        
        
        <div>
          <Navbar/>
          <div className="flex justify-center gap-10 mt-16 mx-10 h-svh ">
          <div className="hidden lg:flex flex-col lg:w-1/4 h-4/5 bg-primary rounded-2xl "> 
            <FilterBox/>
          </div>
          <div className="bg-primary w-5/6 lg:w-2/3 h-4/5 rounded-2xl ">
            <ChatBox/>
          </div>

        </div>
        </div>

      );
}