import { useRouter } from "next/router";
import Image from "next/image";

import Background from "@/components/common/Background/index.js";
import Header from "@/components/common/Heading";
import BackButton from "@/components/common/Button/Back";
import CoverFromData from "@/components/common/Cover/coverData.js";

import { genreData } from "@/public/data/genre.js";
import { bookMetaData } from "@/public/data/bookmeta.js";

import styles from "@/styles/pages/library.module.css";

export default function BookDetail() {
  const router = useRouter(); //für slug routing
  const { slug } = router.query; //für slug routing - aktuelle page
  console.log(slug);

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
  console.log(result.id);

  return (
    <>
      <Background></Background>
      <Header title={"slug page"}></Header>
      <BackButton></BackButton>
      <div className={styles.containe}>
        <div className={styles.cover}>
          <div className={styles.position}>
            <Image
              src={`/images/coverdimension.png`}
              width={300}
              height={425}
              alt="Image"
            ></Image>
          </div>
          <CoverFromData id={result.id} height={400}></CoverFromData>
        </div>
      </div>
      <h1>Title: </h1>
    </>
  );
}
