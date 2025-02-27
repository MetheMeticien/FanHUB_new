import React, { useState } from 'react';
import './PostPage.css';
import Sidebar from '../Common/Sidebar/Sidebar';

const initialCelebrities = [
    { name: 'Rifat', photo: "https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg", content: "Can't believe Messi scored that!!" },
];

const followedCelebrities = ['Elon Musk', 'Beyoncé', 'Cristiano Ronaldo', 'Selena Gomez', 'Will Smith'];

function MessiPostPage() {
    const [dummyCelebrities, setDummyCelebrities] = useState(initialCelebrities);
    const [newPostContent, setNewPostContent] = useState('');
    const [newPostImage, setNewPostImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewPostImage(reader.result); // Store image as base64
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCreatePost = () => {
        if (newPostContent.trim()) {
            const newPost = {
                name: 'Ruhan',
                photo: newPostImage, // Attach the uploaded image
                content: newPostContent
            };

            setDummyCelebrities([newPost, ...dummyCelebrities]);
            setNewPostContent('');
            setNewPostImage(null); // Reset the image after posting
        }
    };

    const handleDeletePost = (indexToDelete) => {
        const updatedCelebrities = dummyCelebrities.filter((_, index) => index !== indexToDelete);
        setDummyCelebrities(updatedCelebrities);
    };

    // Function to trigger the file input click
    const triggerFileInput = () => {
        document.getElementById('image-input').click();
    };

    return (
        
        <div>
            {/* Post creation bar */}
            <div className="postbar-container">
                <textarea
                    placeholder="Let’s share what’s going on..."
                    className="post-textarea"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    rows="4" /* Allows for multiline input */
                />
                <div className='upload-buttons'>
                    {/* Hidden file input for image upload */}
                    <input
                        type="file"
                        id="image-input"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageUpload}
                    />
                    <button className="image-upload-btn" onClick={triggerFileInput}>
                        Image
                    </button>
                    <button className="create-post-btn" onClick={handleCreatePost}>
                        Post
                    </button>
                </div>
            </div>

            {/* Filter bar with buttons */}
            <div className="filter-container">
                <button className="filter-btn">Newest</button>
                <button className="filter-btn">Popular</button>
                <button className="filter-btn notification-btn">
                    Following <span className="notification-count">24</span>
                </button>
            </div>

            {/* Main layout for sidebar and posts */}
            <div className="main-layout">
                {/* Left sidebar for celebrities I follow */}
                {/*<div className="celebrity-sidebar">
                    <h3>Celebrity I Follow</h3>
                    <ul className="celebrity-list">
                        {followedCelebrities.map((celebrity, index) => (
                            <li key={index}>{celebrity}</li>
                        ))}
                    </ul>
                </div>*/}

                {/* Right section for posts */}
                <div className="post-section">
                    {dummyCelebrities.map((celebrity, index) => (
                        <div key={index} className="post-container">
                            <div className='post-header-content'>
                                <div className="post-header">
                                    <img src="src\assets\ruhan.jpg" alt={`${celebrity.name}'s profile`} />
                                    <div className="username">{celebrity.name}</div>
                                </div>
                                <div className="post-content">{celebrity.content.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}</div> {/* Handles new lines */}
                                {celebrity.photo && (
                                    <div className="post-image">
                                        <img src={celebrity.photo} alt="Uploaded" className="uploaded-image" />
                                    </div>
                                )}
                                
                            </div>
                            <button
                                className="delete-post-btn"
                                onClick={() => handleDeletePost(index)}
                            >
                                Delete Post
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MessiPostPage;
