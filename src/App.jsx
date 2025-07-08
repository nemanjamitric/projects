import { useState } from "react";
import CategoryGrid from "./components/CategoryGrid";
import ProjectCard from "./components/ProjectCard";
import { categories } from "./data/categories";
import { projects } from "./data/projects";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expanded, setExpanded] = useState([]);

  const filteredProjects = selectedCategory
    ? projects
        .filter((p) => p.category === selectedCategory)
        .sort((a, b) => (a.year === b.year ? 0 : a.year < b.year ? 1 : -1))
    : projects;

  const toggleExpand = (title) => {
    setExpanded((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const expandAll = () => setExpanded(filteredProjects.map((p) => p.title));
  const collapseAll = () => setExpanded([]);

  return (
    <div className="container py-5">
      {!selectedCategory ? (
        <CategoryGrid categories={categories} onSelect={setSelectedCategory} />
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedCategory(null)}
              >
                Back
              </button>
              <h2 className="m-0">{selectedCategory} Projects</h2>
            </div>
            <div className="btn-group">
              <button className="btn btn-outline-primary" onClick={expandAll}>
                Expand All
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={collapseAll}
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="accordion" id="projectsAccordion">
            {filteredProjects.map((p) => (
              <ProjectCard
                key={p.title}
                project={p}
                isOpen={expanded.includes(p.title)}
                onToggle={toggleExpand}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
