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

  function dynHeight(object1, object2) {
    return (
      (screenWidth - 20) / (object1.relativefactor + object2.relativefactor)
    );
  }

  /*  let content = [];

  for (let i = 1; i <= 3; i + 2) {
    let index = i;
    let heig = dynHeight(bookMetaData[index - 1], bookMetaData[index]);
    content.push(
      <ul key={i} className={styles.div}>
        <Link href="">
          <div className={styles.padding}>
            <CoverFromData id={i} height={heig}></CoverFromData>
          </div>
        </Link>
        <Link href="">
          <div className={styles.padding}>
            <CoverFromData id={index + 1} height={heig}></CoverFromData>
          </div>
        </Link>
      </ul>
    );
  } */
  // !!!!!!!!!!!!!!! Wieso funktioniert es nicht ???
  const hei1 = Math.floor(dynHeight(bookData[0], bookData[1]));
  const hei2 = Math.floor(dynHeight(bookData[2], bookData[3]));
  const hei3 = Math.floor(dynHeight(bookData[4], bookData[5]));
  const hei4 = Math.floor(dynHeight(bookData[6], bookData[7]));
  const hei5 = Math.floor(dynHeight(bookData[8], bookData[9]));

  return (
    <>
      <Background></Background>
      <Header title={slug}></Header>
      <ul className={styles.div}>
        <div className={styles.padding}>
          <Link href={`/library`}>
            <CoverFromData
              slug={bookData[0].slug}
              height={hei1}
            ></CoverFromData>
          </Link>
        </div>
        <div className={styles.padding}>
          <Link href={`/library`}>
            <CoverFromData
              slug={bookData[1].slug}
              height={hei1}
            ></CoverFromData>
          </Link>
        </div>
      </ul>
      <ul className={styles.div}>
        <div className={styles.padding}>
          <Link href={`/library`}>
            <CoverFromData
              slug={bookData[2].slug}
              height={hei2}
            ></CoverFromData>
          </Link>
        </div>
        <div className={styles.padding}>
          <Link href={`/library`}>
            <CoverFromData
              slug={bookData[3].slug}
              height={hei2}
            ></CoverFromData>
          </Link>
        </div>
      </ul>
      <ul className={styles.div}>
        <div className={styles.padding}>
          <Link href={`/library`}>
            <CoverFromData
              slug={bookData[4].slug}
              height={hei3}
            ></CoverFromData>
          </Link>
        </div>
        <div className={styles.padding}>
          <Link href={`/library`}>
            <CoverFromData
              slug={bookData[5].slug}
              height={hei3}
            ></CoverFromData>
          </Link>
        </div>
      </ul>
      <ul className={styles.div}>
        <div className={styles.padding}>
          <Link href={`/library`}>
            <CoverFromData
              slug={bookData[6].slug}
              height={hei4}
            ></CoverFromData>
          </Link>
        </div>
        <div className={styles.padding}>
          <Link href={`/library`}>
            <CoverFromData
              slug={bookData[7].slug}
              height={hei4}
            ></CoverFromData>
          </Link>
        </div>
      </ul>
      <ul className={styles.div}>
        <div className={styles.padding}>
          <Link href={`/library`}>
            <CoverFromData
              slug={bookData[8].slug}
              height={hei5}
            ></CoverFromData>
          </Link>
        </div>
        <div className={styles.padding}>
          <Link href={`/library`}>
            <CoverFromData
              slug={bookData[9].slug}
              height={hei5}
            ></CoverFromData>
          </Link>
        </div>
      </ul>
      {/*  <ul className={styles.div}>{content}</ul> */}
    </>
  );
}
