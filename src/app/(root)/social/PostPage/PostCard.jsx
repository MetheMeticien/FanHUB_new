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
    isUserPost
}) => {
    const [mediaLoaded, setMediaLoaded] = useState(true); 
    const [commentBoxVisible, setCommentBoxVisible] = useState(false); // Toggle comment box
    const [commentText, setCommentText] = useState(""); // Track comment input
    const [commentList, setCommentList] = useState(comments); // Local state for comments

    const handleCommentToggle = () => {
        setCommentBoxVisible(!commentBoxVisible);
    };

    const handleCommentSubmit = (e) => {
        if (e.key === 'Enter' && commentText.trim()) {
            const newComment = { username: fanName, text: commentText };
            setCommentList([...commentList, newComment]); // Update local comments
            setCommentText(''); // Clear input
        }
    };

    const handleMediaError = () => {
        setMediaLoaded(false);
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
                            onError={handleMediaError}
                        />
                    </div>
                )}
                {mediaLoaded && mediaType === 'video' && imageSrc && (
                    <div className="post-media-wrapper">
                        <video 
                            controls 
                            src={imageSrc} 
                            className="post-media"
                            onError={handleMediaError}
                        ></video>
                    </div>
                )}
            </div>

            {/* Footer Section - Like, Comment, Share */}
            <div className="post-actions">
                <button className={`like-button ${liked ? 'liked' : ''}`} onClick={onLike}>
                    <FaThumbsUp />
                    <span className="button-text"> {likes} {liked ? 'Unlike' : 'Like'}</span>
                </button>
                <button className="comment-button" onClick={handleCommentToggle}>
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

            {/* Comment Box (Only Visible When Comment is Clicked) */}
            {commentBoxVisible && (
                <div className="expanded-comments">
                    <ul className="comment-list">
                        {commentList.map((comment, idx) => (
                            <li key={idx} className="comment">
                                <strong>{comment.username}:</strong> {comment.text}
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        onKeyDown={handleCommentSubmit}
                        className="comment-input"
                    />
                </div>
            )}
        </div>
    );
};

export default PostCard;
