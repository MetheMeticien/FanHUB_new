"use client"


import "./RegisterPage/page.css"
import RegisterPage from "./RegisterPage/page"

export default function Login(){
    return(
        <div>
            <div className="login">
                <div className="main-section">
                    <RegisterPage/>
                </div>
            </div>
        </div>

    );
}