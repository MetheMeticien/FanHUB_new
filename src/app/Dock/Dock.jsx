"use client"; // Add this directive at the top of the file

import React from 'react';
import { usePathname } from 'next/navigation'; // Use usePathname from next/navigation
import Link from 'next/link'; // Import Link from Next.js
import { FaNewspaper, FaUserFriends, FaStar } from 'react-icons/fa';
import './Dock.css';

const Dock = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="dock">
      <Link href="/news" passHref>
        <button className={`dock-btn ${pathname === '/news' ? 'active' : ''}`}>
          <FaNewspaper />
        </button>
      </Link>
      <Link href="/social" passHref>
        <button className={`dock-btn ${pathname === '/social' ? 'active' : ''}`}>
          <FaUserFriends />
        </button>
      </Link>
      <Link href="/event" passHref>
        <button className={`dock-btn ${pathname === '/event' ? 'active' : ''}`}>
          <FaStar />
        </button>
      </Link>
    </div>
  );
};

export default Dock;
