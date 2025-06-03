// src/components/Projects.jsx
import React, { useEffect, useState } from "react";

const GITHUB_USERNAME = "im-faix"; // change if needed
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const DEVOPS_KEYWORDS = ["devops", "ci/cd", "docker", "kubernetes", "aws", "infrastructure"];

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
          {
            headers: GITHUB_TOKEN
              ? { Authorization: `token ${GITHUB_TOKEN}` }
              : {},
          }
        );
        const data = await res.json();

        // If GitHub returns an error (e.g., rate limit), data.message will exist
        if (!Array.isArray(data)) {
          const msg = data.message || "Unexpected GitHub response";
          console.error("GitHub API error:", msg);
          setErrorMsg(msg);
          setLoading(false);
          return;
        }

        // Now data is an array, safe to filter
        const filtered = data.filter((repo) => {
          const desc = (repo.description || "").toLowerCase();
          const topics = Array.isArray(repo.topics) ? repo.topics : [];
          return DEVOPS_KEYWORDS.some(
            (keyword) =>
              desc.includes(keyword) || topics.includes(keyword)
          );
        });

        setRepos(filtered);
      } catch (err) {
        console.error("Failed to fetch repos:", err);
        setErrorMsg("Network or parsing error");
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="my-16">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p>Loading projects...</p>
      </section>
    );
  }

  if (errorMsg) {
    return (
      <section id="projects" className="my-16">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-red-400">Error: {errorMsg}</p>
      </section>
    );
  }

  return (
    <section id="projects" className="my-16">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      {repos.length === 0 ? (
        <p className="text-gray-400">No DevOps projects found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-lg transition duration-200"
            >
              <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
              <p className="text-sm text-gray-300 mb-3">{repo.description}</p>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 block mb-2 hover:underline"
                >
                  Live Demo
                </a>
              )}
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
