import React, { useState } from 'react';
import './PostPage.css';
import PostCard from './PostCard';
import { FaClock, FaStar, FaPlus } from 'react-icons/fa';
import Dock from '../../Dock/dock';
import CreatePost from './CreatePost';  // Import CreatePost component
import CelebrityFilter from '../components/CelebrityFilter/CelebrityFilter';  // Import the CelebrityFilter component

const initialPosts = [
    { 
        postId: 'post1', 
        fanName: 'Ruhan', 
        fanPhoto: 'https://cdn.wikimg.net/en/zeldawiki/images/c/ca/TLoZ_Link_Blocking_Artwork_2.png', 
        content: 'Excited about the new rocket launch!', 
        celebrityId: 'elon', 
        timestamp: new Date(),
        likes: 0,
        liked: false,
        comments: [],
        mediaType: 'image',
        mediaUrl: 'https://via.placeholder.com/500'
    },
    { 
        postId: 'post2', 
        fanName: 'Ali', 
        fanPhoto: 'https://as2.ftcdn.net/v2/jpg/00/97/00/09/1000_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg', 
        content: 'Beyoncé is amazing! Can’t wait for the concert!', 
        celebrityId: 'beyonce', 
        timestamp: new Date(),
        likes: 0,
        liked: false,
        comments: [],
        mediaType: 'video',  
        mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' 
    },
    { 
        postId: 'post3', 
        fanName: 'Maya', 
        fanPhoto: 'https://via.placeholder.com/50', 
        content: 'Ronaldo is the best footballer!', 
        celebrityId: 'ronaldo', 
        timestamp: new Date(),
        likes: 0,
        liked: false,
        comments: [],
        mediaType: 'image',
        mediaUrl: 'https://via.placeholder.com/500'
    }
];

const followedCelebrities = [
    { name: 'Elon Musk', id: 'elon' }, 
    { name: 'Beyoncé', id: 'beyonce' }, 
    { name: 'Cristiano Ronaldo', id: 'ronaldo' }
];

const PostPage = () => {
    const loggedInUser = 'Ruhan';  // Assume "Ruhan" is the logged-in user

    const [posts, setPosts] = useState(initialPosts);
    const [selectedCelebrityId, setSelectedCelebrityId] = useState('');  // Track selected celebrity
    const [newPostContent, setNewPostContent] = useState('');
    const [expandedPostIndex, setExpandedPostIndex] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('newest');
    const [showCreatePost, setShowCreatePost] = useState(false);  // State for showing the floating CreatePost form

    const handleCreatePost = (newPost) => {
        if (newPost.content.trim()) {
            const postWithMedia = {
                postId: `post${posts.length + 1}`, // Incremental post ID
                fanName: loggedInUser,
                fanPhoto: 'https://via.placeholder.com/50',
                content: newPost.content,
                celebrityId: newPost.celebrityId,
                timestamp: new Date(),
                likes: 0,
                liked: false,
                comments: [],
                mediaType: newPost.mediaType,
                mediaUrl: URL.createObjectURL(newPost.mediaFile),  // Convert media file to URL for display
            };
            setPosts([postWithMedia, ...posts]);
            setShowCreatePost(false);  // Close the CreatePost form after posting
        }
    };

    const handleLikePost = (indexToToggle) => {
        const updatedPosts = posts.map((post, index) => {
            if (index === indexToToggle) {
                return {
                    ...post,
                    likes: post.liked ? post.likes - 1 : post.likes + 1,
                    liked: !post.liked
                };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const handleDeletePost = (indexToDelete) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            const updatedPosts = posts.filter((_, index) => index !== indexToDelete);
            setPosts(updatedPosts);
        }
    };

    const handleFilterNewest = () => {
        const sorted = [...posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setPosts(sorted);
        setSelectedFilter('newest');
    };

    const handleFilterPopular = () => {
        const sorted = [...posts].sort((a, b) => b.likes - a.likes);
        setPosts(sorted);
        setSelectedFilter('popular');
    };

    const toggleExpandPost = (index) => {
        setExpandedPostIndex(index === expandedPostIndex ? null : index);
    };

    const handleAddComment = (index, comment) => {
        const updatedPosts = posts.map((post, idx) => {
            if (idx === index) {
                return {
                    ...post,
                    comments: [...post.comments, { username: loggedInUser, text: comment }]
                };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    // Filter posts by selected celebrityId
    const filteredPosts = selectedCelebrityId
        ? posts.filter(post => post.celebrityId === selectedCelebrityId)
        : posts;

    // Handle selecting a celebrity or "All"
    const handleCelebritySelect = (celebrityId) => {
        if (celebrityId === 'all') {
            setSelectedCelebrityId('');  // Show all posts
        } else {
            setSelectedCelebrityId(celebrityId);
        }
    };

    return (
        <div className="post-page-container">
            {/* Left Pane: Celebrities List with "All" option */}
            <div className="left-pane">
                <CelebrityFilter 
                    followedCelebrities={followedCelebrities}
                    selectedCelebrityId={selectedCelebrityId}
                    handleCelebritySelect={handleCelebritySelect}
                />
            </div>

            {/* Middle Pane: Post Section */}
            
                <div className="post-section">
                    {filteredPosts.map((post, index) => (
                        <PostCard
                            key={post.postId}
                            fanName={post.fanName}
                            fanPhoto={post.fanPhoto}
                            content={post.content}
                            timestamp={post.timestamp}
                            imageSrc={post.mediaUrl}
                            mediaType={post.mediaType}
                            likes={post.likes}
                            comments={post.comments}
                            liked={post.liked}
                            onLike={() => handleLikePost(index)}  // Apply actions on all posts
                            onDelete={() => handleDeletePost(index)}  // Apply actions on all posts
                            onExpand={() => toggleExpandPost(index)}  // Apply actions on all posts
                            expanded={expandedPostIndex === index}
                            onAddComment={(comment) => handleAddComment(index, comment)}  // Apply actions on all posts
                            isUserPost={post.fanName === loggedInUser}
                        />
                    ))}
                </div>
            

            {/* Right Pane: Sort By Options */}
            <div className="right-pane">
                <div className="sort-by-title">Sort By:</div>
                <div className="filter-buttons">
                    <button
                        className={`filter-btn ${selectedFilter === 'newest' ? 'selected' : ''}`}
                        onClick={handleFilterNewest}
                    >
                        <FaClock /> Newest
                    </button>
                    <button
                        className={`filter-btn ${selectedFilter === 'popular' ? 'selected' : ''}`}
                        onClick={handleFilterPopular}
                    >
                        <FaStar /> Popular
                    </button>
                </div>
            </div>

            {/* Floating Create Post Button */}
            <button className="create-post-float-btn" onClick={() => setShowCreatePost(true)}>
                <FaPlus />
            </button>

            {/* Floating CreatePost Form */}
            {showCreatePost && (
                <CreatePost
                    followedCelebrities={followedCelebrities}
                    onCreatePost={handleCreatePost}
                    onClose={() => setShowCreatePost(false)}  // Close the CreatePost form
                />
            )}

            {/* Floating Dock with buttons */}
            <Dock />
        </div>
    );
};

export default PostPage;
