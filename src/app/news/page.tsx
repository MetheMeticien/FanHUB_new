import Image from "next/image";
import Navbar from "@/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Other_News from "./components/Other_news/other_news";
import News_Scroller from "./components/News_Scroller/scroller";
import "./page.css"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="news">
        <div className="left-bar">
          dsadsadsadsa
        </div>
        <div className="main-section">
          <div className="following">
            <div className="hero">
              <Hero/>
            </div>
            <div className="others">
              <Other_News/>
              <Other_News/>
              <Other_News/>
              <Other_News/>
              <Other_News/>
              <Other_News/>
              

            </div>
          </div>
          <div className="Recommended">
          <div className="scroller">
          <News_Scroller/>

          </div>
          </div>

        </div>
      </div>
    </div>
  );
}
