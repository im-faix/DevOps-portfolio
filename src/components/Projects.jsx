// components/ProjectCard.js
const ProjectCard = ({ repo }) => (
  <div className="project-card">
    <h2><a href={repo.html_url}>{repo.name}</a></h2>
    <p>{repo.description}</p>
    <p>Technologies: {repo.topics.join(', ')}</p>
    {repo.homepage && <a href={repo.homepage}>Live Demo</a>}
  </div>
);
