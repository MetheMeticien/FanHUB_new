import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import Link from 'next/link'; // Import Link from Next.js
import { FaNewspaper, FaUserFriends, FaStar } from 'react-icons/fa';
import './Dock.css';

const Dock = () => {
  const router = useRouter(); // Get the current route

  return (
    <div className="dock">
      <Link href="/news" passHref>
        <button className={`dock-btn ${router.pathname === '/news' ? 'active' : ''}`}>
          <FaNewspaper />
        </button>
      </Link>
      <Link href="/posts" passHref>
        <button className={`dock-btn ${router.pathname === '/posts' ? 'active' : ''}`}>
          <FaUserFriends />
        </button>
      </Link>
      {/* Celebrity page button will be activated later */}
      <Link href="/celebrity" passHref>
        <button className={`dock-btn ${router.pathname === '/celebrity' ? 'active' : ''}`}>
          <FaStar />
        </button>
      </Link>
    </div>
  );
};

export default Dock;
