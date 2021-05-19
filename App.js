import api from   './services/api'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, [])
  
  async function handleAddProject(){
    //setProjects([...projects, `Novo projeto ${Date.now()}`])
   const response =  await api.post('projects', {
        title: `Novo projeto ${Date.now()}`,
        owner: "Gabriel"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <header title="projects"/>
      <ul>
        {
        projects.map(
          project => <li key={project.id}>{project.title}</li>
          )
        }
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
