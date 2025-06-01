import { useEffect, useState } from 'react';

const useGitHubProjects = (username) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await res.json();
        const devOpsRepos = data.filter(repo =>
          repo.topics?.includes("devops") || repo.name.toLowerCase().includes("devops")
        );
        setProjects(devOpsRepos);
      } catch (err) {
        console.error("Failed to fetch GitHub repos", err);
      }
    };
    fetchRepos();
  }, [username]);

  return projects;
};

export default useGitHubProjects;
