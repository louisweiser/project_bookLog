import React from "react";
import { useState } from "react";

import styles from "./search.module.css";

export default function Test() {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    setState(true);
  };

  const items = ["book1", "book2", "book3", "book4"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onClick={handleClick}
        placeholder="  search ..."
      />
      <ul className={state ? styles.active : styles.hide}>
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
      {state}
    </div>
  );
}
