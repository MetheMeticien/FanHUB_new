import React from "react";
import "./celebrityFilter.css";

const CelebrityFilter = ({ followedCelebrities, selectedCelebrityId, handleCelebritySelect }) => {
    return (
        <div className="celebrity-filter">
            <h3>Celebrities I Follow</h3>
            <ul className="celebrity-list">
                <li 
                    onClick={() => handleCelebritySelect('all')}
                    className={selectedCelebrityId === '' ? 'active' : ''}
                >
                    All
                </li>
                {followedCelebrities.map((celebrity) => (
                    <li 
                        key={celebrity.id} 
                        onClick={() => handleCelebritySelect(celebrity.id)}
                        className={selectedCelebrityId === celebrity.id ? 'active' : ''}
                    >
                        {celebrity.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CelebrityFilter;
