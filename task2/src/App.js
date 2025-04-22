import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const sampleUsers = [
  { id: 1, name: 'Alice', posts: 12 },
  { id: 2, name: 'Bob', posts: 18 },
  { id: 3, name: 'Charlie', posts: 7 },
  { id: 4, name: 'Diana', posts: 25 },
  { id: 5, name: 'Eve', posts: 19 },
  { id: 6, name: 'Frank', posts: 14 },
];

const samplePosts = [
  { id: 1, user: 'Diana', comments: 10, content: 'Post A', image: 'https://source.unsplash.com/random/1' },
  { id: 2, user: 'Bob', comments: 5, content: 'Post B', image: 'https://source.unsplash.com/random/2' },
  { id: 3, user: 'Alice', comments: 10, content: 'Post C', image: 'https://source.unsplash.com/random/3' },
  { id: 4, user: 'Frank', comments: 2, content: 'Post D', image: 'https://source.unsplash.com/random/4' },
];

const sampleFeed = [
  { id: 1, user: 'Charlie', content: 'New Feature Update!', image: 'https://source.unsplash.com/random/5' },
  { id: 2, user: 'Eve', content: 'Excited to share this!', image: 'https://source.unsplash.com/random/6' },
];

const TopUsers = () => {
  const topUsers = [...sampleUsers].sort((a, b) => b.posts - a.posts).slice(0, 5);
  return (
    <div className="container mt-4">
      <h2>Top 5 Users by Posts</h2>
      <ul className="list-group">
        {topUsers.map(user => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <img src={`https://source.unsplash.com/random/30x30?sig=${user.id}`} alt="User" className="rounded-circle me-2" />
            {user.name}
            <span className="badge bg-primary rounded-pill">{user.posts} Posts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TrendingPosts = () => {
  const maxComments = Math.max(...samplePosts.map(post => post.comments));
  const trending = samplePosts.filter(post => post.comments === maxComments);

  return (
    <div className="container mt-4">
      <h2>Trending Posts</h2>
      {trending.map(post => (
        <div key={post.id} className="card mb-3">
          <img src={post.image} className="card-img-top" alt="Post" />
          <div className="card-body">
            <h5 className="card-title">{post.user}</h5>
            <p className="card-text">{post.content}</p>
            <p className="card-text"><small className="text-muted">{post.comments} Comments</small></p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Feed = () => {
  const [feed, setFeed] = useState(sampleFeed);

  useEffect(() => {
    const interval = setInterval(() => {
      const newId = feed.length + 1;
      const newPost = {
        id: newId,
        user: `User${newId}`,
        content: `This is a new post ${newId}`,
        image: `https://source.unsplash.com/random/30${newId}`,
      };
      setFeed(prev => [newPost, ...prev]);
    }, 5000);
    return () => clearInterval(interval);
  }, [feed]);

  return (
    <div className="container mt-4">
      <h2>Live Feed</h2>
      {feed.map(post => (
        <div key={post.id} className="card mb-3">
          <img src={post.image} className="card-img-top" alt="Post" />
          <div className="card-body">
            <h5 className="card-title">{post.user}</h5>
            <p className="card-text">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Social Analytics</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/top-users">Top Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/trending">Trending Posts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/feed">Feed</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<TopUsers />} />
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
