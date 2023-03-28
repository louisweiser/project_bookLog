import React from "react";
import { useContext } from "react"; //global state for searching container rendering

import { MyContext } from "@/contexts/myContext.js"; //global state for searching container rendering

import styles from "./search.module.css";

export default function SearchPage() {
  const { searchTerm, setSearchTerm } = useContext(MyContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className={styles.background}>
        <div className={styles.searchField_passiv}>
          <input
            className={styles.searchInputField}
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="  search ..."
            /*das input feld soll immer zu sehen sein um die suchfuntion darzustellen, es ändert den status wenn es geklickt wird*/
          />
        </div>
      </div>
    </>
  );
}
