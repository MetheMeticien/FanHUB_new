import React, { useState } from 'react';
import { FaThumbsUp, FaCommentAlt, FaTrash, FaEllipsisV, FaLink } from 'react-icons/fa';
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
    isUserPost,
    postId,
    userPhoto // New: Profile picture of the logged-in user commenting
}) => {
    const [mediaLoaded, setMediaLoaded] = useState(true);
    const [commentBoxVisible, setCommentBoxVisible] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [commentList, setCommentList] = useState(comments);
    const [menuVisible, setMenuVisible] = useState(false); 

    const handleCommentToggle = () => {
        setCommentBoxVisible(!commentBoxVisible);
    };

    const handleCommentSubmit = (e) => {
        if (e.key === 'Enter' && commentText.trim()) {
            // Use `userPhoto` instead of `fanPhoto` so the commenter's profile picture is correct
            const newComment = { username: fanName, text: commentText, photo: userPhoto };
            setCommentList([...commentList, newComment]);
            setCommentText('');
        }
    };

    const handleMediaError = () => {
        setMediaLoaded(false);
    };

    const handleCopyLink = () => {
        const postUrl = `${window.location.origin}/post/${postId}`;
        navigator.clipboard.writeText(postUrl).then(() => {
            alert("Post link copied to clipboard!");
        });
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="post-card">
            {/* Header Section */}
            <div className="post-card-header justify-between">
                <div className="flex gap-5">
                    <img src={fanPhoto} alt={`${fanName}'s profile`} className="profile-pic" />
                    <div className="post-info">
                        <div className="post-user-name">{fanName}</div>
                        <small className="post-timestamp">{new Date(timestamp).toLocaleString()}</small>
                    </div>
                </div>
                {isUserPost && (
                    <div className="post-options">
                        <button className="options-button" onClick={toggleMenu}>
                            <FaEllipsisV />
                        </button>
                        {menuVisible && (
                            <div className="post-options-menu">
                                <button onClick={onDelete}>
                                    <FaTrash /> Delete
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Body Section */}
            <div className="post-card-body">
                <p className="post-description">{content}</p>
                {mediaLoaded && imageSrc && (
                    <div className="post-media-wrapper">
                        {mediaType === 'image' ? (
                            <img 
                                src={imageSrc} 
                                alt="Post content" 
                                className="post-media"
                                onError={handleMediaError}
                            />
                        ) : mediaType === 'video' ? (
                            <video 
                                controls 
                                src={imageSrc} 
                                className="post-media"
                                onError={handleMediaError}
                            ></video>
                        ) : null}
                    </div>
                )}
            </div>

            {/* Footer Section */}
            <div className="post-stats">
                <span className="likes-count">{likes} Likes</span>
                <span className="comments-count">{commentList.length} Comments</span>
            </div>

            <div className="post-actions">
                <button className={`like-button ${liked ? 'liked' : ''}`} onClick={onLike}>
                    <FaThumbsUp />
                    <span className="button-text"> {liked ? 'Unlike' : 'Like'}</span>
                </button>
                <button className="comment-button" onClick={handleCommentToggle}>
                    <FaCommentAlt />
                    <span className="button-text"> Comment</span>
                </button>
                <button className="copy-link-button" onClick={handleCopyLink}>
                    <FaLink />
                    <span className="button-text"> Copy Link</span>
                </button>
            </div>

            {/* Comment Box */}
            {commentBoxVisible && (
                <div className="expanded-comments">
                    <ul className="comment-list">
                        {commentList.map((comment, idx) => (
                            <li key={idx} className="comment">
                                <div className="comment-content">
                                    <img src='/asse' alt={`${comment.username}`} className="comment-profile-pic" />
                                    <div className="comment-text">
                                        {comment.text}
                                    </div>
                                </div>
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
