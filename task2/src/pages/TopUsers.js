import React, { useEffect, useState } from 'react';
import { fetchTopUsers } from '../services/api';
import UserCard from '../components/UserCard';

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTopUsers().then(res => setUsers(res.data));
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default TopUsers;
