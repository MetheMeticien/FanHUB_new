"use client";

import { useState } from "react";
import Image from "next/image";
import { useSelectedUser } from "@/context/SelectedUserContext"; // Adjust the import path

export default function LeftBar({ following }) {
    const { selectedUser, setSelectedUser } = useSelectedUser();
    const [searchQuery, setSearchQuery] = useState("");

    // Filter users based on search query
    const filteredFollowing = following.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle user selection/deselection
    const handleUserClick = (user) => {
        if (selectedUser?.name === user.name) {
            setSelectedUser(null); // Deselect if the same user is clicked
        } else {
            setSelectedUser(user); // Select the user
        }
    };

    return (
        <div className="flex flex-col gap-6 h-[700px] p-6 bg-gray-600 rounded-2xl shadow-lg">
            {/* Search Box */}
            <div className="bg-[#181818] p-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Following Section */}
            <div className="bg-[#181818] p-4 rounded-xl min-h-96">
                <h2 className="font-sans text-gray-200 mb-4 font-bold text-lg">
                    Following
                </h2>
                <div className="flex flex-col gap-3 max-h-64 overflow-y-auto">
                    {filteredFollowing.map((user, index) => (
                        <button
                            key={index}
                            onClick={() => handleUserClick(user)}
                            className={`flex items-center w-full p-2 rounded-lg transition duration-200 ${
                                selectedUser?.name === user.name
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "hover:bg-gray-700"
                            }`}
                        >
                            <div className="relative w-10 h-10">
                                <Image
                                    src={user.imageUrl}
                                    alt="profile"
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <h2 className="font-sans text-sm text-gray-300 ml-3">
                                {user.name}
                            </h2>
                        </button>
                    ))}
                </div>
            </div>

            {/* Selected User Display */}
            {selectedUser && (
                <div className="bg-gray-800 p-4 rounded-xl">
                    <h2 className="font-sans text-gray-200 mb-4 font-bold text-lg">
                        Selected User
                    </h2>
                    <div className="flex items-center">
                        <div className="relative w-12 h-12">
                            <Image
                                src={selectedUser.imageUrl}
                                alt="profile"
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>
                        <h2 className="font-sans text-sm text-gray-300 ml-3">
                            {selectedUser.name}
                        </h2>
                    </div>
                </div>
            )}
        </div>
    );
}