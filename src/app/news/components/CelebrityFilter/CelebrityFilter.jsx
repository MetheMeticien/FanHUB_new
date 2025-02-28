"use client";

import React from "react";

const CelebrityFilter = ({ selectedCelebrityId, onCelebritySelect, followedCelebrities }) => {
  return (
    <div className="celebrity-filter">
      <h3>Celebrity I Follow</h3>
      <ul className="celebrity-list">
        <li
          onClick={() => onCelebritySelect("all")}
          className={selectedCelebrityId === "" ? "active" : ""}
        >
          All
        </li>
        {followedCelebrities.map((celebrity) => (
          <li
            key={celebrity.id}
            onClick={() => onCelebritySelect(celebrity.id)}
            className={selectedCelebrityId === celebrity.id ? "active" : ""}
          >
            {celebrity.name}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .celebrity-filter {
          padding: 10px;
          border-radius: 8px;
          background: #fff;
        }
        h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .celebrity-list {
          list-style: none;
          padding: 0;
        }
        .celebrity-list li {
          padding: 10px;
          cursor: pointer;
          transition: 0.3s;
        }
        .celebrity-list li:hover,
        .celebrity-list .active {
          background: #b71631;
          color: white;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default CelebrityFilter;
