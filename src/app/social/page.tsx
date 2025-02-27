"use client"


import "./social.css"
import Navbar from "@/Navbar/navbar";
import PostPage from "../social/PostPage/PostPage";

export default function Social(){
    return(
        <div>
            <Navbar/>
            <div className="social">
                <div className="left-bar">

                </div>
                <div className="main-section">
                    <PostPage/>
                </div>
                <div className="right-bar">
                    
                </div>
            </div>
        </div>

    );
}