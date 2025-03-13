"use client";

import Image from "next/image";
import React from "react";
import "./other_news.css";

export default function Other_News({ newsData, onClick }) {
  return (
    <div className="other_news" onClick={onClick}>
      <div className="container">
        {/* Image */}
        <Image
          className="scroll-img"
          src={newsData.medialink || "/assets/placeholder.jpg"} // Default image if medialink is missing
          alt={newsData.headline}
          width={300}
          height={200}
          unoptimized
        />

        {/* Text Section */}
        <div className="text-section">
          <div className="heading">
            <h3 className="celeb-name">{newsData.celeb_tags?.[0] || "Unknown"}</h3>
            <h3 className="celeb-name">{new Date(newsData.date_time).toLocaleDateString()}</h3>
          </div>

          {/* News Title - Max 2 Lines */}
          <div className="news">
            <div className="news-title">
              <h1 className="truncate-title">{newsData.headline}</h1>
            </div>

            {/* News Description - Max 4 Lines */}
            <div className="description">
              <h4 className="truncate-body">{newsData.summarized_body || "No summary available."}</h4>
            </div>
          </div>

          {/* Footer Section */}
          <div className="footer">
            <div className="medium">
              <h3>{newsData.source_name || "Unknown Source"}</h3>
            </div>
            <a href={newsData.source_url} target="_blank" rel="noopener noreferrer">
              <button>Read More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
