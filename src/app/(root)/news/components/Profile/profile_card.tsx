"use client";

import { useState } from "react";

export default function Profile_Card() {
    // Dummy data for the celebrity
    const celebData = {
        imageUrl: "https://pbs.twimg.com/media/Fbk1sv6VUAAEjgR.jpg:large",
        name: "Antony Matheus",
        occupation: "Footballer",
        bio: "King Antony is one of the best players in the world. He is known for his speed and dribbling skills.",
        followers: 1234567,
        isFollowing: false,
    };

    // State to handle follow/unfollow
    const [isFollowing, setIsFollowing] = useState(celebData.isFollowing);

    // Toggle follow/unfollow
    const toggleFollow = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <div className="max-w-[890px] w-full pr-32 border-primary border-8 h-80 bg-gray-400 rounded-l-full rounded-r-3xl mb-5 shadow-lg overflow-hidden flex">
            {/* Image Section */}
            <div className="h-full flex items-center justify-center">
                <div className="w-80 h-80 rounded-full overflow-hidden">
                    <img
                        src={celebData.imageUrl}
                        alt={celebData.name}
                        className="w-full h-full object-top object-cover"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-2/3 p-4 flex flex-col justify-around">
                {/* Name and Occupation */}
                <div>
                    <h1 className="text-4xl font-bold text-gray-900">{celebData.name}</h1>
                    <p className="text-lg text-gray-700">{celebData.occupation}</p>
                </div>

                {/* Bio */}
                <p className="text-base text-gray-800">{celebData.bio}</p>

                {/* Followers and Follow Button */}
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-700">
                        {celebData.followers.toLocaleString()} followers
                    </p>
                    <button
                        onClick={toggleFollow}
                        className={`px-6 py-3 rounded-full text-base font-semibold transition-colors ${!isFollowing
                                ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                    >
                        {isFollowing ? "Follow" : "Unfollow"}
                    </button>
                </div>
            </div>
        </div>
    );
}