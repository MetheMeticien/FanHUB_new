"use client"

import Navbar from '@/Navbar/navbar';
import './globals.css';
import { Lato } from "next/font/google";
import "@/app/news/components/Modal/modal.css";
import Dock from './Dock/Dock';
import { useEffect } from 'react';
import Left_bar from './Left_Bar/left_bar';
import Right_bar from './Right_Bar/right_bar';
import { ConvexClientProvider } from './ConvexClientProvider';

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Force dark mode
  }, []);
  
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Dock />
      </body>
    </html>
  )
}
