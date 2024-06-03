import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github+json',
    'Authorization': import.meta.env.VITE_GITHUB_TOKEN ? `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` : undefined
  }
});

export const getRepos = (options = {}) => {
  return api.get(`/users/Majeedatwahab/repos`, {
    params: {
      per_page:4,
      ...options
    }
  });
};

export const getRepoDetails = (repoName) => {
  return api.get(`/repos/Majeedatwahab/${repoName}`);
};
