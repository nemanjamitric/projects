const CategoryGrid = ({ categories, onSelect }) => {
  return (
    <div className="text-center">
      <h1 className="display-4 mb-2">My Projects</h1>
      <p className="lead text-muted mb-4">
        Explore my work across different areas
      </p>
      <div className="row">
        {categories.map((cat) => (
          <div key={cat.title} className="col-12 col-md-4 mb-4">
            <div
              className="card h-100 text-center p-4 shadow-sm hover-shadow cursor-pointer"
              role="button"
              onClick={() => onSelect(cat.title)}
            >
              <div className="display-4">{cat.icon}</div>
              <h5 className="mt-3">{cat.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
