import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Background from "@/components/common/Background/blue.js";
import Header from "@/components/common/Heading/Collection.js";
import CoverFromData from "@/components/common/Cover/coverData.js";

import { useContext } from "react";
import { DataContext } from "@/contexts/dataContext.js";

import styles from "./slug.module.css";

export default function GenreLibrary() {
  const router = useRouter(); //für slug routing
  const { slug } = router.query; //für slug routing - aktuelle page

  const { bookData } = useContext(DataContext);

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize); //bei Änderungen der Bildschirmgröße soll die Breit neu ermittelt werden

    setScreenWidth(window.innerWidth); // Initialisiere die aktuelle Bildschirmgröße

    return () => {
      window.removeEventListener("resize", handleResize);
    }; // Entferne den Event-Listener, wenn die Komponente unmountet wird
  }, []);

  function filterBooksByGenre(genre) {
    const bookbygenre = bookData.filter((book) => book.genre === genre);

    return bookbygenre;
  }

  function calculateHeights(booksArray) {
    if (!booksArray) {
      return [];
    }

    const relativeFactors = booksArray.map((book) => book.relativefactor);

    const array = [];

    for (let i = 0; i < relativeFactors.length; i += 2) {
      if (i + 1 < relativeFactors.length) {
        let height = Math.floor(
          (screenWidth - 20) / (relativeFactors[i] + relativeFactors[i + 1])
        );
        if (height < 0) {
          height = 0;
        } //error handling
        array.push(height);
        array.push(height);
      } else {
        let height = Math.floor((screenWidth - 20) / 2 / relativeFactors[i]);
        if (height < 0) {
          height = 0;
        } //error handling
        array.push(height);
      }
    }
    return array;
  }

  const booksbygenre = filterBooksByGenre(slug);
  const heightArray = calculateHeights(booksbygenre);

  function renderCover() {
    const render = Object.values(booksbygenre).map((book, index) => {
      return (
        <div key={index}>
          <Link href={`/library/book/${book.slug}`}>
            <CoverFromData
              slug={book.slug}
              height={heightArray[index]}
            ></CoverFromData>
          </Link>
        </div>
      );
    });
    return <>{render}</>;
  }

  return (
    <>
      <Background></Background>
      <Header title={slug}></Header>
      <ul className={styles.div}>{renderCover()}</ul>
    </>
  );
}
