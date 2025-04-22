import React from 'react';
import { getRandomImage } from '../assets/images';

const PostCard = ({ post }) => (
  <div className="bg-white rounded-xl shadow-md p-4 mb-4">
    <img src={getRandomImage()} alt="post" className="w-full h-40 object-cover rounded-md mb-3" />
    <h3 className="font-bold text-xl">{post.title}</h3>
    <p className="text-gray-600">{post.body}</p>
    <p className="text-sm text-blue-500 mt-2">Comments: {post.commentCount}</p>
  </div>
);

export default PostCard;
