import { useState } from "react";
import "./index.css";

const projects = [
  { name: "Mug", difficulty: "Easy", image: "https://via.placeholder.com/150" },
   { name: "Cup", difficulty: "Easy", image: "https://www.rosenfieldcollection.com/wp-content/uploads/gravity_forms/1-92d5fbfe3510109f1716498fb3f34f27/2025/02/c1490f1.jpeg" },
  { name: "Vase", difficulty: "Medium", image: "https://via.placeholder.com/150" },
  { name: "Teapot", difficulty: "Hard", image: "https://via.placeholder.com/150" },
];

export default function App() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.difficulty === filter);

  return (
    <div className="app">
      <h1>Ceramics Project Chooser</h1>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <div className="grid">
        {filteredProjects.map((project, i) => (
          <div key={i} className="card">
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.difficulty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
