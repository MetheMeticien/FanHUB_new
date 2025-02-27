import React, { useState } from 'react';
import { FaThumbsUp, FaCommentAlt, FaTrash } from 'react-icons/fa';
import './PostCard.css';

const PostCard = ({
    fanName,
    fanPhoto,
    content,
    timestamp,
    mediaType,
    imageSrc,
    likes,
    comments,
    liked,
    onLike,
    onDelete,
    onExpand,
    expanded,
    onAddComment,
    isUserPost
}) => {
    const [mediaLoaded, setMediaLoaded] = useState(true); // Track media load state

    const handleCommentSubmit = (e) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            onAddComment(e.target.value.trim());  // Pass only the comment text
            e.target.value = '';
        }
    };
    

    const handleMediaError = () => {
        setMediaLoaded(false); // Set to false if media fails to load
    };

    return (
        <div className="post-card">
            {/* Header Section */}
            <div className="post-card-header">
                <img src={fanPhoto} alt={`${fanName}'s profile`} className="profile-pic" />
                <div className="post-info">
                    <div className="post-user-name">{fanName}</div>
                    <small className="post-timestamp">{new Date(timestamp).toLocaleString()}</small>
                </div>
            </div>

            {/* Body Section */}
            <div className="post-card-body">
                <p className="post-description">{content}</p>
                {mediaLoaded && imageSrc && mediaType === 'image' && (
                    <div className="post-media-wrapper">
                        <img 
                            src={imageSrc} 
                            alt="Post content" 
                            className="post-media"
                            onError={handleMediaError} // Hide if image fails to load
                        />
                    </div>
                )}
                {mediaLoaded && mediaType === 'video' && imageSrc && (
                    <div className="post-media-wrapper">
                        <video 
                            controls 
                            src={imageSrc} 
                            className="post-media"
                            onError={handleMediaError} // Hide if video fails to load
                        ></video>
                    </div>
                )}
            </div>

            {/* Footer Section */}
            <div className="post-actions">
                <button 
                    className={`like-button ${liked ? 'liked' : ''}`} 
                    onClick={onLike}
                >
                    <FaThumbsUp />
                    <span className="button-text"> {likes} {liked ? 'Unlike' : 'Like'}</span>
                </button>
                <button className="comment-button" onClick={onExpand}>
                    <FaCommentAlt />
                    <span className="button-text"> Comment</span>
                </button>
                {isUserPost && (
                    <button className="delete-button" onClick={onDelete}>
                        <FaTrash />
                        <span className="button-text"> Delete</span>
                    </button>
                )}
            </div>

            {/* Expanded Comments Section */}
            {expanded && (
                <div className="expanded-comments">
                    <h4>Comments</h4>
                    <ul className="comment-list">
                        {comments.map((comment, idx) => (
                            <li key={idx} className="comment">
                                <strong>{comment.username}:</strong> {comment.text}
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        onKeyDown={handleCommentSubmit}
                        className="comment-input"
                    />
                </div>
            )}
        </div>
    );
};

export default PostCard;
