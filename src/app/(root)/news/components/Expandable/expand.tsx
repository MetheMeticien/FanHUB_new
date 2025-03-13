"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import './expand.css'

interface News {
    headline: string;
    summarized_body: string;
    celeb_tags: string[];
    date_time: string;
    medialink: string;
    source_name: string;
    source_url: string;
}

interface ExpandProps {
    newsData: News;
}

export default function Expand({ newsData }: ExpandProps) {
    const { headline, summarized_body, celeb_tags, date_time, medialink, source_name, source_url } = newsData;

    return (
        <div className="expand">
            <div className="container">
                <img className="scroll-img" src={medialink} alt="News Image" />
                <div className="text-section">
                    <div className="heading">
                        <h3 className="celeb-name">{celeb_tags.join(', ')}</h3>
                        <h3 className="celeb-name">{new Date(date_time).toLocaleString()}</h3>
                    </div>
                    <div className="news">
                        <div className="news-title">
                            <h1>{headline}</h1>
                        </div>

                        <div className="description">
                            <h4>{summarized_body}</h4>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="medium">
                            <h3>{source_name}</h3>
                        </div>

                        <a href={source_url} target="_blank" rel="noopener noreferrer">
                            <button >Source</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
