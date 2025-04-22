import React from 'react';
import { getRandomImage } from '../assets/images';

const UserCard = ({ user }) => (
  <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4">
    <img src={getRandomImage()} alt="user" className="w-16 h-16 rounded-full" />
    <div>
      <h3 className="font-semibold text-lg">{user.name}</h3>
      <p className="text-sm text-gray-500">Posts: {user.postCount}</p>
    </div>
  </div>
);

export default UserCard;
