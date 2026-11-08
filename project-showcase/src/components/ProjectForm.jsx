import { useState } from 'react';

const ProjectForm = ({ onAddProject }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;

        onAddProject({
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
        });

        setTitle('');
        setDescription('');
    };

    return (
        <div className="card shadow-sm mb-4 border-0">
            <div className="card-body p-4">
                <h2 className="card-title h4 fw-semibold mb-3">Add New Project</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label fw-medium">Title</label>
                        <input
                           id="title"
                           type="text"
                           className="form-control"
                           placeholder="Project Title..."
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label fw-medium">Description</label>
                        <textarea
                           id="description"
                           className="form-control"
                           placeholder="Description of the project..."
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                           rows="3"
                           required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary px-4 fw-semibold">Add Project</button>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;