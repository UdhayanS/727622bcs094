import axios from 'axios';

const API_URL = 'http://20.244.56.144/test/'; 

export const fetchTopUsers = () => axios.get(`${API_URL}/users/top`);
export const fetchTrendingPosts = () => axios.get(`${API_URL}/posts/trending`);
export const fetchFeedPosts = () => axios.get(`${API_URL}/posts/feed`);
