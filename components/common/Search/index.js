import React from "react";
import { useState } from "react"; // state for searching input
import { useContext } from "react"; //global state for searching container rendering
import Link from "next/link"; //zum linken der suchergebnisse

import { MyContext } from "@/contexts/myContext.js"; //global state for searching container rendering

import searchObjects from "../../../utils/search.js"; //logic-function for searching

import CoverFromData from "@/components/common/Cover/coverData.js";

import { BackSVG } from "@/public/svgs/router"; //svg for back-button in search field
import { bookData } from "@/public/data/book.js"; //data for result examples
import { bookMetaData } from "@/public/data/bookmeta.js"; //zum linken der suchergebnisse

import styles from "./search.module.css";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState(""); //state for save the searching input
  const [initialHide, setInitialHide] = useState(true); //state for hiding animation when switching to page
  const { myState, setMyState } = useContext(MyContext); //global state to render the searching container

  const handleBackClick = () => {
    setMyState(false);
    setSearchTerm("");
  }; //wenn die Suchanzeige geschlossen wird, wird Sucheingaben und das Suchfeld zurückgesetzt
  const handleOnClick = () => {
    setMyState(true);
    setInitialHide(false);
  }; //wenn das Suchfeld geklickt wird, erscheint die Suchanzeige

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }; // save input if searching

  const searchResults = searchObjects(bookData, searchTerm); // logic results by searching in seaching field

  return (
    <>
      <div
        className={
          initialHide
            ? styles.searchField_passiv
            : myState
            ? styles.searchField_active
            : styles.searchField_passiv
          //hier soll das Suchfeld in einer Animation erscheinen wenn das searchform geklickt wird, myState geht dann auf true
        }
      >
        {
          myState && !initialHide && (
            <button onClick={handleBackClick}>
              <BackSVG></BackSVG>
            </button>
          ) /*wenn das Suchfeld aktiv ist soll ein Button erscheinen der es wieder schließen lässt*/
        }

        <input
          className={styles.searchInputField}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={handleOnClick}
          placeholder="  search ..."
          /*das input feld soll immer zu sehen sein um die suchfuntion darzustellen, es ändert den status wenn es geklickt wird*/
        />
      </div>
      <div
        className={
          initialHide
            ? styles.resultField_initial
            : myState
            ? styles.resultField_active
            : styles.resultField_passive
          /*hier ist das Feld mit den Ergebnissen das eerst erscheint wenn der searchinput geklickt wird. Es erscheint durch eine Animation. Diese soll beim ersten laden der Seite jedoch nicht ausegführt werden (deswegen initial hide)*/
        }
      >
        {searchTerm !== "" && (
          <ul className={styles.list}>
            {searchResults.length !== 0 ? (
              searchResults.map((item) => (
                <Link
                  href={`/library/book/${bookMetaData[item.id - 1].slugname}`}
                  key={item.id}
                >
                  <li className={styles.row}>
                    <CoverFromData id={item.id} height={100}></CoverFromData>
                    <div className={styles.column}>
                      <h4>
                        {item.title} {item.subtitle}
                      </h4>
                      <h5>von {item.author}</h5>
                    </div>
                  </li>
                </Link>
              ))
            ) : (
              <h1>no result like {searchTerm}</h1>
            )}
          </ul> //das ist die Liste der Suchergebnisse. Sie erscheint nur im active status der Suchkomponente
        )}
      </div>
    </>
  );
}
