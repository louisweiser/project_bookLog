import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Background from "@/components/common/Background/index.js";
import Header from "@/components/common/Heading/Collection.js";
import CoverFromData from "@/components/common/Cover/coverData.js";

import { bookMetaData } from "@/public/data/bookmeta.js";

import styles from "./slug.module.css";

export default function GenreLibrary() {
  const router = useRouter(); //für slug routing
  const { slug } = router.query; //für slug routing - aktuelle page

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
  const hei1 = Math.floor(dynHeight(bookMetaData[0], bookMetaData[1]));
  const hei2 = Math.floor(dynHeight(bookMetaData[2], bookMetaData[3]));
  const hei3 = Math.floor(dynHeight(bookMetaData[4], bookMetaData[5]));
  const hei4 = Math.floor(dynHeight(bookMetaData[6], bookMetaData[7]));
  const hei5 = Math.floor(dynHeight(bookMetaData[8], bookMetaData[9]));

  return (
    <>
      <Background></Background>
      <Header title={slug}></Header>
      <ul className={styles.div}>
        <div className={styles.padding}>
          <Link href={`/library/book/${bookMetaData[0].slugname}`}>
            <CoverFromData id={1} height={hei1}></CoverFromData>
          </Link>
        </div>
        <div className={styles.padding}>
          <Link href={`/library/book/${bookMetaData[1].slugname}`}>
            <CoverFromData id={2} height={hei1}></CoverFromData>
          </Link>
        </div>
      </ul>
      <ul className={styles.div}>
        <div className={styles.padding}>
          <Link href={`/library/book/${bookMetaData[2].slugname}`}>
            <CoverFromData id={3} height={hei2}></CoverFromData>
          </Link>
        </div>
        <div className={styles.padding}>
          <Link href={`/library/book/${bookMetaData[3].slugname}`}>
            <CoverFromData id={4} height={hei2}></CoverFromData>
          </Link>
        </div>
      </ul>
      <ul className={styles.div}>
        <div className={styles.padding}>
          <Link href={`/library/book/${bookMetaData[4].slugname}`}>
            <CoverFromData id={5} height={hei3}></CoverFromData>
          </Link>
        </div>
        <div className={styles.padding}>
          <Link href={`/library/book/${bookMetaData[5].slugname}`}>
            <CoverFromData id={6} height={hei3}></CoverFromData>
          </Link>
        </div>
      </ul>
      <ul className={styles.div}>
        <div className={styles.padding}>
          <Link href={`/library/book/${bookMetaData[6].slugname}`}>
            <CoverFromData id={7} height={hei4}></CoverFromData>
          </Link>
        </div>
        <div className={styles.padding}>
          <Link href={`/library/book/${bookMetaData[7].slugname}`}>
            <CoverFromData id={8} height={hei4}></CoverFromData>
          </Link>
        </div>
      </ul>
      <ul className={styles.div}>
        <div className={styles.padding}>
          <Link href={`/library/book/${bookMetaData[8].slugname}`}>
            <CoverFromData id={9} height={hei5}></CoverFromData>
          </Link>
        </div>
        <div className={styles.padding}>
          <Link href={`/library/book/${bookMetaData[9].slugname}`}>
            <CoverFromData id={10} height={hei5}></CoverFromData>
          </Link>
        </div>
      </ul>
      {/*  <ul className={styles.div}>{content}</ul> */}
    </>
  );
}
