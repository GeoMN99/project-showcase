import { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

const initialProjects = [
  { id: 1, title: 'Project 1', description: 'Description of the project' },
  { id: 2, title: 'Project 2', description: 'Description of the project' },
  { id: 3, title: 'Project 3', description: 'Description of the project' },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.toLowerCase();
    const matchesTitle = project.title ? project.title.toLowerCase().includes(term) : false;
    const matchesDesc = project.description ? project.description.toLowerCase().includes(term) : false;
    return matchesTitle || matchesDesc;
  });

  return (
    <div className="bg-light min-vh-100 pb-5">
      <Header />
      <main className="container" style={{ maxWidth: '850px' }}>
        <ProjectForm onAddProject={handleAddProject} />
        <hr className="my-4 text-secondary opacity-25" />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <ProjectList projects={filteredProjects} onDeleteProject={handleDeleteProject} />
      </main>
    </div>
  );
}

export default App;