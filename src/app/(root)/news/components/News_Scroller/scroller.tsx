import React from "react";
import One_News from "./one_news";
import "./scroller.css";

export default function News_Scroller({ newsItems }) {
  return (
    <div className="news_auto_scroller">
      <div className="scroller_content">
        {newsItems.map((news, index) => (
          <One_News key={index} newsData={news} />
        ))}
        {newsItems.map((news, index) => (
          <One_News key={`duplicate-${index}`} newsData={news} />
        ))}
      </div>
    </div>
  );
}

