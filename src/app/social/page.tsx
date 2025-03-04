"use client"


import "./social.css"
import Navbar from "@/Navbar/navbar";
import PostPage from "../social/PostPage/PostPage";

export default function Social(){
    return(
        <div>
            <div className="social">
                <div className="main-section">
                    <PostPage/>
                </div>
            </div>
        </div>

    );
}