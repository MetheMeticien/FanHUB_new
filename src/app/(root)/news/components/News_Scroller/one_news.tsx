import React from "react";
import './one_news.css';

export default function One_News({ newsData }) {
    return (
        <div className="scrolling-news">
            <div className="container">
                <img className="scroll-img" src={newsData.medialink} alt={newsData.headline} />
                <div className="text-section">
                    <div className="heading">
                        <h3 className="celeb-name">{newsData.celeb_tags[0]}</h3> {/* Assuming the first tag is the celebrity name */}
                        <h3 className="celeb-name">{new Date(newsData.date_time).toLocaleString()}</h3>
                    </div>
                    <div className="news-title">
                        <h1>{newsData.headline}</h1>
                    </div>

                    <div className="description">
                        <h4>{newsData.summarized_body}</h4>
                    </div>

                    <div className="footer">
                        <div className="medium">
                            <h3>{newsData.source_name}</h3>
                        </div>

                        <button>
                            <a href={newsData.source_url} target="_blank" rel="noopener noreferrer">Read More</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
