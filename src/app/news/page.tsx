"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Other_News from "./components/Other_news/other_news";
import News_Scroller from "./components/News_Scroller/scroller";
import Modal from "./components/Modal/Modal";
import "./page.css";
import Expand from "./components/Expandable/expand";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null); // Reference to modal content

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Detect clicks outside modal
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    }
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div>
      <Navbar />
      <div className="news">
        <div className="left-bar">dsadsadsadsa</div>
        <div className="main-section">
          <div className="following">
            <div className="hero">
              <Hero />
            </div>
            <div className="others">
              <Other_News onClick={handleOpenModal} />
              <Other_News onClick={handleOpenModal} />
              <Other_News onClick={handleOpenModal} />
            </div>
          </div>
          <div className="Recommended">
            <div className="scroller">
              <News_Scroller />
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {isModalOpen && (
          <>
            {/* Background Overlay */}
            <div className="fixed inset-0 bg-black opacity-80 z-40"></div>

            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div
                ref={modalRef} // Attach ref to modal content
                className="shadow-lg w-full max-w-3xl"
              >
                <Expand />
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}
