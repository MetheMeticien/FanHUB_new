import One_News from "./one_news";
import "./scroller.css";

export default function News_Scroller() {
  const newsItems = Array(12).fill(<One_News />); // Create 12 news items

  return (
    <div className="news_auto_scroller">
      <div className="scroller_content">
        {newsItems}
        {newsItems} {/* Duplicate items for seamless scrolling */}
      </div>
    </div>
  );
}
