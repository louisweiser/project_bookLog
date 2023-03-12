import React, { useState } from "react";

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <h1>{searchTerm}</h1>
    </>
  );
}
