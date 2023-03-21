import { useRouter } from "next/router";

import Background from "@/components/common/Background/index.js";
import Header from "@/components/common/Heading/Detail.js";
import CoverFromData from "@/components/common/Cover/coverData.js";

import { bookMetaData } from "@/public/data/bookmeta.js";
import { bookSummary } from "@/public/data/bookentries/booksummary.js";
import { bookStories } from "@/public/data/bookentries/bookstory.js";

import styles from "./slug.module.css";

export default function BookDetail() {
  const router = useRouter(); //für slug routing
  const { slug } = router.query; //für slug routing - aktuelle page

  function searchArray(array, searchTerm) {
    // durch jedes Objekt im Array iterieren
    for (let i = 0; i < array.length; i++) {
      const object = array[i];

      // durch jedes Schlüssel-Wert-Paar im Objekt iterieren
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const value = object[key];

          // Überprüfen, ob der Suchbegriff mit dem aktuellen Schlüsselwert übereinstimmt
          if (value === searchTerm) {
            return object; // Objekt zurückgeben, wenn der Suchbegriff gefunden wurde
          }
        }
      }
    }

    // Objekt nicht gefunden, wenn die Funktion hier angekommen ist
    return null;
  }
  const result = searchArray(bookMetaData, slug);
  // !!!!!!!!!!!! bug !! beim öffnen der page über die url ist der router kurz null somit der slug auch somit result auch und das programm crasht beim aufrufen der komponente Bookcover, die ein result prop braucht

  console.log(bookStories[1].length);

  /*   function ObjektListe({ objektArray }) {
    const eintraege = objektArray.flatMap((objekt) => objekt.eintraege);

    return (
      <div>
        {eintraege.map((eintrag, index) => (
          <div key={index}>{eintrag}</div>
        ))}
      </div>
    );
  } */

  return (
    <>
      <Background></Background>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.cover}>
          <CoverFromData id={result.id} height={300}></CoverFromData>
        </div>
        <div className={styles.summary}>
          <h3>Summary :</h3>
          <h4>{bookSummary[result.id - 1].summary}</h4>
        </div>
        <div className={styles.summary}>
          <h3>Storie 1: {bookStories[result.id - 1][0].title}</h3>
          <h4>{bookStories[result.id - 1][0].text}</h4>
        </div>
        <div className={styles.summary}>
          <h3>Storie 2: {bookStories[result.id - 1][1].title}</h3>
          <h4>{bookStories[result.id - 1][1].text}</h4>
        </div>
      </div>
    </>
  );
}
