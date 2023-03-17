import React from "react";
import { useState } from "react"; // state for searching input
import { useContext } from "react"; //global state for searching container rendering
import { MyContext } from "@/contexts/myContext.js"; //global state for searching container rendering

import { BackSVG } from "@/public/svgs/headerSVGs"; //svg for back button in search field

import { bookData } from "@/public/data/book.js"; //data for result examples

import styles from "./search.module.css";

import searchObjects from "./logic.js";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState(""); // state for searching input
  const { myState, setMyState } = useContext(MyContext); //global state for searching container rendering

  const handleBackClick = () => {
    setMyState(false);
    setSearchTerm("");
  }; //handle global state for searching container rendering
  const handleOnClick = () => {
    setMyState(true);
  }; //handle global state for searching container rendering

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }; // save input by searching in seaching field

  const array = searchObjects(bookData, searchTerm);
  console.log(array);

  return (
    <>
      <div
        className={
          myState ? styles.searchField_active : styles.searchField_passiv
        }
      >
        {myState ? (
          <button onClick={handleBackClick}>
            <BackSVG></BackSVG>
          </button>
        ) : (
          console.log("f")
        )}

        <input
          className={styles.searchInputField}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={handleOnClick}
          placeholder="  search ..."
        />
      </div>
      <div
        className={
          myState ? styles.resultField_active : styles.resultField_passiv
        }
      >
        {searchTerm === "" ? (
          <h1></h1>
        ) : (
          <ul>
            {array.length !== 0 ? (
              array.map((item) => (
                <li key={item.id}>
                  <h2>
                    {item.title} {item.subtitle}
                  </h2>
                  <h3>von {item.author}</h3>
                </li>
              ))
            ) : (
              <h1>no result like {searchTerm}</h1>
            )}
          </ul>
        )}
      </div>
    </>
  );
}
