import React from "react";

function Search({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="col-sm-6 mb-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control"
          type="search"
          role="searchbox"
          placeholder="Search users..."
          value={search}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}

export default Search;
