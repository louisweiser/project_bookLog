import React from "react";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
