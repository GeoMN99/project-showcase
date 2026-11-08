const ProjectCard = ({ project, onDeleteProject }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0 position-relative">
                <button
                   type="button"
                   className="btn-close position-absolute top-0 end-0 m-3"
                   onClick={() => onDeleteProject(project.id)}
                   aria-label={`Delete ${project.title}`}></button>
                   <div className="card-body p-4">
                    <h3 className="card-title h5 fw-semibold mb-0">{project.title}</h3>
                    <p className="card-text text-secondary mb-0">{project.description}</p>
                   </div>
            </div>
        </div>
    );
};

export default ProjectCard;
