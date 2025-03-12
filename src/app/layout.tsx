"use client"

import Navbar from '@/Navbar/navbar';
import './globals.css';
import { Lato } from "next/font/google";
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
  return (
    <html lang="en" className={lato.className}>
      <body className='bg-background'>
        {children}
      </body>
    </html>
  )
}