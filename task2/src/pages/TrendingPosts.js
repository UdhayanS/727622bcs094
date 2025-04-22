import React, { useEffect, useState } from 'react';
import { fetchTrendingPosts } from '../services/api';
import PostCard from '../components/PostCard';

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchTrendingPosts().then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default TrendingPosts;
