import React, { useEffect } from "react";
import { useState } from "react"; // state for searching input
import { useContext } from "react"; //global state for
import { MyContext } from "@/contexts/myContext.js"; //global state for

import CoverFromData from "@/components/common/Cover/coverData.js";

import { BackSVG } from "@/public/svgs/router"; //svg for back-button in search field
import { DataContext } from "@/contexts/dataContext.js"; //global state for

import searchBooks from "@/components/common/Search";

import styles from "./search.module.css";
import { bookData } from "@/public/data/book";

export default function Currentbook() {
  const [searchTerm, setSearchTerm] = useState(""); //state for save the searching input
  const [initialHide, setInitialHide] = useState(true); //state for hiding animation when switching to page
  const { currentbook, setCurrentbook } = useContext(MyContext); //global state for
  const { myStateCreate, setMyStateCreate } = useContext(MyContext); //global state for
  const { bookData } = useContext(DataContext);

  const searchResults = searchBooks(searchTerm, bookData); // logic results by searching in seaching field

  useEffect(() => {
    if (myStateCreate) {
      setInitialHide(false);
    }
    // Wichtig: Wenn die Komponente unmountet wird oder sich ändert, solltest du deine Effekte
    // wieder aufräumen, indem du eine "cleanup"-Funktion zurückgibst.
    return () => {
      console.log("Cleanup!");
    };
  }, [myStateCreate]);

  const handleBackClick = () => {
    setMyStateCreate(false);
    setSearchTerm("");
  }; //wenn die Suchanzeige geschlossen wird, wird Sucheingaben und das Suchfeld zurückgesetzt

  const handleOnClick = () => {
    setMyStateCreate(true);
    setInitialHide(false);
  }; //wenn das Suchfeld geklickt wird, erscheint die Suchanzeige

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }; // save input if searching

  return (
    <>
      <div>
        <div
          className={
            initialHide
              ? styles.searchField_passiv
              : myStateCreate
              ? styles.searchField_active
              : styles.searchField_passiv
            //hier soll das Suchfeld in einer Animation erscheinen wenn das searchform geklickt wird, myState geht dann auf true
          }
        >
          {
            myStateCreate && !initialHide && (
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
              : myStateCreate
              ? styles.resultField_active
              : styles.resultField_passive
            /*hier ist das Feld mit den Ergebnissen das eerst erscheint wenn der searchinput geklickt wird. Es erscheint durch eine Animation. Diese soll beim ersten laden der Seite jedoch nicht ausegführt werden (deswegen initial hide)*/
          }
        >
          {searchTerm !== "" && (
            <ul className={styles.list}>
              {searchResults.length !== 0 ? (
                searchResults.map((item) => (
                  <div key={item.slug}>
                    <button
                      className={styles.container}
                      type="button"
                      onClick={() => {
                        setCurrentbook(item.slug);
                        setMyStateCreate(false);
                        setSearchTerm("");
                      }}
                    >
                      <li className={styles.row}>
                        <CoverFromData
                          slug={item.slug}
                          height={100}
                        ></CoverFromData>
                        <div className={styles.column}>
                          <h4>
                            {item.title} {item.subtitle}
                          </h4>
                          <h5>von {item.author}</h5>
                        </div>
                      </li>
                    </button>
                  </div>
                ))
              ) : (
                <h1>no result like {searchTerm}</h1>
              )}
            </ul> //das ist die Liste der Suchergebnisse. Sie erscheint nur im active status der Suchkomponente
          )}
        </div>
      </div>
    </>
  );
}
