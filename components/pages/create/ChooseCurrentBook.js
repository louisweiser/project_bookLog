import React, { useEffect, useState, useContext } from "react";

import { MyContext } from "@/contexts/myContext.js";

import CoverFromData from "@/components/common/Cover/BookCover.js";

import { BackSVG } from "@/public/svgs/router";
import { DataContext } from "@/contexts/dataContext.js";

import searchBooks from "@/components/common/Search";

import styles from "./search.module.css";

export default function ChooseCurrentBook() {
  const [searchTerm, setSearchTerm] = useState("");
  const [initialHide, setInitialHide] = useState(true);
  const { setCurrentbook } = useContext(MyContext);
  const { chooseCurrentBook, setChooseCurrentBook } = useContext(MyContext);
  const { bookData } = useContext(DataContext);

  const searchResults = searchBooks(searchTerm, bookData);

  useEffect(() => {
    if (chooseCurrentBook) {
      setInitialHide(false);
    }
  }, [chooseCurrentBook]);

  const handleBackClick = () => {
    setChooseCurrentBook(false);
    setSearchTerm("");
  };

  const handleOnClick = () => {
    setInitialHide(false);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div>
        <div
          className={
            initialHide
              ? styles.searchField_passiv
              : chooseCurrentBook
              ? styles.searchField_active
              : styles.searchField_passiv
            //hier soll das Suchfeld in einer Animation erscheinen wenn das searchform geklickt wird, myState geht dann auf true
          }
        >
          {
            chooseCurrentBook && !initialHide && (
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
              : chooseCurrentBook
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
                        setChooseCurrentBook(false);
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
