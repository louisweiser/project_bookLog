import React from "react";
import { useState } from "react";
//import { useContext } from "react";
//import { MyContext } from "@/src/contexts/myContext";

import styles from "./search.module.css";

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  //const { myState, setMyState } = useContext(MyContext);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const items = ["book1", "book2", "book3", "book4"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="  search ..."
      />
      <ul>
        {filteredItems.length !== 0 ? (
          filteredItems.map((item) => (
            <li key={item}>
              <h2>{item}</h2>
            </li>
          ))
        ) : (
          <h1>add {searchTerm}</h1>
        )}
      </ul>
    </>
  );
}
