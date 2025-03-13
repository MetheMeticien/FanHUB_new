"use client"


import "./LoginPage/LoginPage.css"
import LoginPage from "./LoginPage/page";

export default function Login(){
    return(
        <div>
            <div className="login">
                <div className="main-section">
                    <LoginPage/>
                </div>
            </div>
        </div>

    );
}