"use client"; // Required for Next.js

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaSearch, FaComment, FaBell, FaUserCircle } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="navbar bg-primary">
      <div className="logo">
        <img src="assets/logo.png" alt="logo" />
      </div>

      {/* Search Bar */}
      <div className="search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search Celebrities or Posts" />
      </div>

      {/* Icons Section */}
      <div className="nav-icons">
        <Link href="/chat" passHref>
          <button className={`nav-btn ${pathname === "/chat" ? "active" : ""}`}>
            <FaComment />
          </button>
        </Link>
        <Link href="/profile" passHref>
            <img className="profile" src="assets/profile_pic.jpg" alt="dp" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
