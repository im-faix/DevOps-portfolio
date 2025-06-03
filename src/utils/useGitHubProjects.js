// utils/githubService.js
export const fetchDevOpsRepos = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await response.json();
  return data.filter(repo =>
    repo.topics?.includes("devops") || repo.description?.toLowerCase().includes("devops")
  );
};
