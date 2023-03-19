import Link from "next/link";

import CoverFromData from "@/components/common/Cover/coverData.js";

import { genreData } from "@/public/data/genre.js";

import styles from "./collection.module.css";

export default function CollectionFromData() {
  let content = [];

  for (let i = 0; i < 10; i++) {
    content.push(
      <li key={i} className={styles.padding}>
        <Link href="">
          <CoverFromData id={i}></CoverFromData>
        </Link>
      </li>
    );
  }
  return genreData.map((item, index) => (
    <div key={index}>
      <h3> {item}</h3>
      <ul className={styles.div}>{content}</ul>
    </div>
  ));
}
