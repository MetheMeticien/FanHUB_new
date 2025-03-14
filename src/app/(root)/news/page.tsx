"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Other_News from "./components/Other_news/other_news";
import News_Scroller from "./components/News_Scroller/scroller";
import CelebrityFilter from "../social/components/CelebrityFilter/CelebrityFilter";
import "./page.css";
import Modal from "./components/Modal/Modal";
import Expand from "./components/Expandable/expand";
import AIChatBox from "./components/chat_ai/chat_ai";

import AntonyNews from '~/public/jsons/antony.json'
import GameNews from '~/public/jsons/games.json'


import { useSelectedUser } from "@/context/SelectedUserContext";
import Profile_Card from "./components/Profile/profile_card";

export default function Home() {

  const { selectedUser } = useSelectedUser();

  const [newsItems,setNewsItems] = useState(GameNews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null); // State to store selected news
  const modalRef = useRef(null); // Reference to modal content

  const handleOpenModal = (news) => {
    setSelectedNews(news); // Store the clicked news data
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null); // Reset selected news when closing the modal
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

  useEffect(() => {
    if (selectedUser) {
      setNewsItems(AntonyNews);
    } else {
      setNewsItems(GameNews);
    }
  }, [selectedUser]);

  return (
    <div>
      <div className="news ">
        <div className="flex">
          <div className="main-section flex-2">
            <div className="following">
              {selectedUser?(
                <div>
                <Profile_Card/>
                </div>
                
              ):(
                <div className="hero">
                <Hero />
              </div>
              )}
              
              
              
              <div className="others">
                {newsItems.map((news, index) => (
                  <Other_News
                    key={index}
                    newsData={news}
                    onClick={() => handleOpenModal(news)} // Pass clicked news data
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="hidden xl:flex flex-col gap-10 bg-primary mx-6 rounded-xl">


              {selectedUser ? (
                <aside className="fixed top-30 right-20 bg-primary rounded-xl">
                  <div className="">
                    <AIChatBox />
                  </div>
                </aside>
              ) : (
                <div>
                  <h2 className="text-2xl text-gray-400 font-bold p-4 text-center">
                    Recommended
                  </h2>

                  <aside className="">
                    <div className="">
                      <News_Scroller newsItems={newsItems} />
                    </div>
                  </aside>
                </div>
              )}






            </div>
          </div>
        </div>
      </div>

      {/* Floating Dock with buttons */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {isModalOpen && selectedNews && (
          <>
            {/* Background Overlay */}
            <div className="fixed inset-0 bg-black opacity-80 z-40"></div>

            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div
                ref={modalRef} // Attach ref to modal content
                className="shadow-lg w-full max-w-3xl"
              >
                <Expand newsData={selectedNews} /> {/* Pass selected news to Expand */}
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}
