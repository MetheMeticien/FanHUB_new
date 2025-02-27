// CreatePost.js
import React, { useState } from 'react';
import './CreatePost.css';
import { FaTimes, FaVideo, FaImage } from 'react-icons/fa';

const CreatePost = ({ onClose, onCreatePost, followedCelebrities }) => {
    const [postDescription, setPostDescription] = useState('');
    const [mediaType, setMediaType] = useState('image');
    const [mediaFile, setMediaFile] = useState(null);
    const [selectedCelebrityId, setSelectedCelebrityId] = useState(followedCelebrities[0]?.id || '');

    const handleFileChange = (event) => {
        setMediaFile(event.target.files[0]);
    };

    const handleSubmit = () => {
        if (postDescription && selectedCelebrityId && mediaFile) {
            onCreatePost({
                content: postDescription,
                celebrityId: selectedCelebrityId,
                mediaType: mediaType,
                mediaFile: mediaFile,
            });
            onClose(); // Close the form after creating the post
        }
    };

    return (
        <div className="create-post-overlay">
            <div className="create-post-container">
                <button className="close-btn" onClick={onClose}>
                    <FaTimes />
                </button>
                <h3>Create a Post</h3>

                {/* Post description */}
                <textarea
                    placeholder="What's on your mind?"
                    value={postDescription}
                    onChange={(e) => setPostDescription(e.target.value)}
                />

                {/* Media Type Selection */}
                <div className="media-type-selector">
                    <label>
                        <input
                            type="radio"
                            name="mediaType"
                            value="image"
                            checked={mediaType === 'image'}
                            onChange={() => setMediaType('image')}
                        />
                        <FaImage /> Image
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="mediaType"
                            value="video"
                            checked={mediaType === 'video'}
                            onChange={() => setMediaType('video')}
                        />
                        <FaVideo /> Video
                    </label>
                </div>

                {/* Media upload */}
                <input
                    type="file"
                    accept={mediaType === 'image' ? 'image/*' : 'video/*'}
                    onChange={handleFileChange}
                />

                {/* Celebrity selection */}
                <select
                    value={selectedCelebrityId}
                    onChange={(e) => setSelectedCelebrityId(e.target.value)}
                >
                    {followedCelebrities.map((celebrity) => (
                        <option key={celebrity.id} value={celebrity.id}>
                            {celebrity.name}
                        </option>
                    ))}
                </select>

                {/* Buttons */}
                <div className="action-buttons">
                    <button onClick={handleSubmit}>Create Post</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
