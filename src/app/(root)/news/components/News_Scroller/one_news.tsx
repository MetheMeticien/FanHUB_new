import React from "react"
import './one_news.css'


export default function One_News() {
    return (
        <div className="scrolling-news">
            <div className="container">
                <img className="scroll-img" src="\assets\messi_ballon_dor.jpg" alt="" />
                <div className="text-section">
                    <div className="heading">
                        <h3 className="celeb-name">Lionel Messi</h3>
                        <h3 className="celeb-name">3 hours ago</h3>

                    </div>
                    <div className="news-title">
                        <h1>Messi wins the Ballon Dor once again</h1>
                    </div>

                    <div className="description">
                        <h4>Lionel Messi has claimed the prestigious
                            Ballon d'Or award, marking a historic milestone
                            in his illustrious career. The Argentine
                            superstar edged out fierce competition, solidifying
                            his position as one of football's greatest legends.
                        </h4>
                    </div>

                    <div className="footer">
                        <div className="medium">
                            <h3>ESPN, SkySports</h3>
                        </div>

                        <button>Read More</button>
                    </div>

                </div>


            </div>

        </div>
    )
}