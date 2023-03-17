import React from "react";
import SearchBar from "./searchBar.js";
import SearchResult from "./searchresult.js";

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setIsSearching(true);

    // Hier können Sie Ihre Suchlogik implementieren
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleClose = () => {
    setIsSearching(false);
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {isSearching && (
        <div className="search-overlay">
          <SearchResult results={searchResults} onClose={handleClose} />
        </div>
      )}
    </div>
  );
};

export default Search;
