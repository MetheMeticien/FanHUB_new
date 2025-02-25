import "./social.css"
import Navbar from "@/Navbar/navbar";

export default function Social(){
    return(
        <div>
            <Navbar/>
            <div className="social">
                <div className="left-bar">

                </div>
                <div className="main-section">
                    <div className="create-post">
                        <div className="header">
                            <h1>Create Post</h1>
                        </div>
                        <div className="text-section">
                            <input type="text" placeholder="Want to share something? Here you go."/>
                        </div>
                        <div className="footer">
                            <button>Post</button>
                        </div>
                    </div>
                </div>
                <div className="right-bar">
                    
                </div>
            </div>
        </div>

    );
}