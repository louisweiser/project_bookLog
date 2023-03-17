import React from "react";

const SearchResult = ({ results, onClose }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.title}</div>
      ))}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SearchResult;
