import React, { useEffect, useState } from 'react';
import { fetchFeedPosts } from '../services/api';
import PostCard from '../components/PostCard';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    fetchFeedPosts().then(res => setPosts(res.data.reverse()));
  };

  useEffect(() => {
    loadPosts();
    const interval = setInterval(loadPosts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
