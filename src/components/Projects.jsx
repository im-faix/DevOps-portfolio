import useGitHubProjects from '../utils/useGitHubProjects';

const Projects = () => {
  const projects = useGitHubProjects("im-faix");

  return (
    <section id="projects">
      <h2 className="section-title">DevOps Projects</h2>
      <div className="projects-container">
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
