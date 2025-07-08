const ProjectCard = ({ project, isOpen, onToggle }) => {
  return (
    <div className="card mb-3">
      <div
        className="card-header d-flex justify-content-between align-items-center"
        onClick={() => onToggle(project.title)}
        role="button"
      >
        <div>
          <h5 className="mb-0">{project.title}</h5>
          {!isOpen && (
            <small className="text-muted">
              {project.technologies.join(", ")} • {project.year}
            </small>
          )}
        </div>

        <div className="d-flex align-items-center gap-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline-primary me-2"
              onClick={(e) => e.stopPropagation()}
            >
              Visit
            </a>
          )}
          <span className="text-muted">{isOpen ? "▲" : "▼"}</span>
        </div>
      </div>

      {isOpen && (
        <div className="card-body">
          <div className="row justify-content-between align-items-center">
            {project.imageURL && (
              <div className="col">
                <img
                  src={project.imageURL}
                  alt={`${project.title} screenshot`}
                  className="card-image"
                />
              </div>
            )}
            <div className="col align-items-center">
              <p>
                <strong>Description:</strong> {project.description}
              </p>
              <p>
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <p>
                <strong>Year:</strong> {project.year}
              </p>
              <p>
                <strong>Context:</strong> {project.context}
              </p>
              <p>
                <strong>Team:</strong> {project.team}
              </p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Visit Project
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
