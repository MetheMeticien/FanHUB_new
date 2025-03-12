"use client"

import Navbar from '@/Navbar/navbar';
import './styles/globals.css'; 
import "@/app/news/components/Modal/modal.css";
import { useEffect } from 'react';
import Dock from './Dock/Dock';
import { ConvexClientProvider } from './ConvexClientProvider';

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
        <ConvexClientProvider>{children}</ConvexClientProvider>
        <Dock />
      </body>
    </html>
  )
}
