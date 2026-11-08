const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="card shadow-sm mb-4 border-0">
      <div className="card-body p-4">
        <label htmlFor="search" className="form-label h5 fw-semibold mb-3">
          Search Projects
        </label>
        <input
          id="search"
          type="text"
          className="form-control form-control-lg"
          placeholder="Search by title or description..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;