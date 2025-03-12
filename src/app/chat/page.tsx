"use client"

import Image from "next/image";
import { useQuery } from "convex/react";
import {api} from "~/convex/_generated/api"
import {Button} from "@/components/ui/button"

export default function ChatApp() {
    const names = useQuery(api.names.get);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {names?.map(({ name, id }) => <div key={name}>{id}</div>)}
        </main>
      );
}