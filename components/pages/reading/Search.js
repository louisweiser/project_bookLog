import React from "react";
import { useState } from "react"; // state for searching input
import { useContext } from "react"; //global state for searching container rendering

import { MyContext } from "@/contexts/myContext.js"; //global state for searching container rendering

import styles from "./search.module.css";

export default function SearchPage() {
  const { renderReading, setRenderReading } = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [originalArray] = useState([...renderReading]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      const searchResults = originalArray.filter((obj) =>
        Object.values(obj).some(
          (val) =>
            typeof val === "string" &&
            val.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setRenderReading(searchResults);
    } else {
      setRenderReading(originalArray);
    }
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
