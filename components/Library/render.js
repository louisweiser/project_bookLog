import Link from "next/link";

import BookCover from "@/components/common/test/test.js";
import RenderBookCoverC from "@/components/common/test/testC";
import RenderBook from "@/components/common/test/renderCover/testA.js";

import RenderCollection from "@/components/common/test/testE";

import { bookMetaData } from "@/public/data/bookmeta.js";
import { genreData } from "@/public/data/genre.js";

import styles from "./render.module.css";

export default function Library() {
  let content = [];

  for (let i = 0; i < 10; i++) {
    content.push(
      <li key={i} className={styles.padding}>
        <Link href="">
          <RenderBook id={i}></RenderBook>
        </Link>
      </li>
    );
  }

  /* content.push(
    bookMetaData.map((objekt) => (
      <li key={objekt.name} className={styles.padding}>
        <Link href="">
          <RenderBookCoverC imageName={objekt.name}></RenderBookCoverC>
        </Link>
      </li>
    ))
  ); */
  /*
  return genreData.map((item, index) => (
    <div key={index}>
      <h3> {item}</h3>
      <ul className={styles.div}>{content}</ul>
    </div>
  )); */
  return genreData.map((item, index) => (
    <div key={index}>
      <h3> {item}</h3>
      <ul className={styles.div}>{content}</ul>
    </div>
  ));
}
