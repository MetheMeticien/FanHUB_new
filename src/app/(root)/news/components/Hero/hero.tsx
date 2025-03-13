import React from "react"
import './hero.css'
import Image from "next/image"

export default function Hero() {
    const news = {
        "headline": "Best Weapons In Monster Hunter Wilds",
        "body": [],
        "summarized_body": "Monster Hunter Wilds offers 14 weapon types, each with unique movesets and perks. The Great Sword is recommended for beginners due to its wide attack arc and blocking ability. The Hammer deals heavy damage, while the Dual Blades excel in sustained combos. The Heavy Bowgun is ideal for ranged combat, and the Bow offers homing shots. The Hunting Horn supports teammates with melodies.",
        "likes": 0,
        "comments": [],
        "celeb_tags": [
            "Monster Hunter"
        ],
        "date_time": "2025-02-28 18:24:15.805911",
        "medialink": "https://www.gamespot.com/a/uploads/scale_super/1816/18167535/4451453-monster-hunter-wilds-best-weapons-guide-.jpg",
        "source_name": "GameSpot",
        "source_url": "https://www.gamespot.com/gallery/best-weapons-in-monster-hunter-wilds/2900-6288/"
    }

    return (
        <div className="hero">
            <div className="container">
                <Image
                    src={news["medialink"]}
                    alt="ESPN Football"
                    width={943}
                    height={530}
                    unoptimized // Disables Next.js optimizations
                />

                <div className="text-section">
                    <div className="heading">
                        <h3 className="celeb-name">{news["celeb_tags"]}</h3>
                        <h3 className="celeb-name">3 hours ago</h3>

                    </div>
                    <div className="news">
                        <div className="news-title">
                            <h1>{news["headline"]}</h1>
                        </div>

                        <div className="description">
                            <h4>{news['summarized_body']}</h4>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="medium">
                            <h3>{news["source_name"]}</h3>
                        </div>

                        <button>Read More</button>
                    </div>

                </div>


            </div>

        </div>
    )
}