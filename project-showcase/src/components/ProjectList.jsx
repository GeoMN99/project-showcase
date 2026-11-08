import ProjectCard from './ProjectCard';

const ProjectList = ({ projects, onDeleteProject }) => {
    if (projects.length === 0) {
        return (
            <div className="text-center py-5 bg-white rounded shadow-sm">
                <p className="lead text-muted mb-0">No projects match.</p>
            </div>      
        );
    }

    return (
        <div className="row">
            {projects.map((project) => (
                <ProjectCard
                   key={project.id}
                   project={project}
                   onDeleteProject={onDeleteProject}
                />
            ))}
        </div>
    );
};

export default ProjectList;