import Link from "next/link";
import Image from "next/image";

import BookCover from "@/components/common/test/test.js";

import { genreData } from "@/public/data/genre.js";

import styles from "./render.module.css";

let content = [];
for (let i = 0; i < 5; i++) {
  content.push(
    <li className={styles.padding}>
      <Link href="">
        <BookCover height={220}></BookCover>
      </Link>
    </li>
  );
}

export default function Library() {
  return genreData.map((item, index) => (
    <div key={index}>
      <h3> {item}</h3>
      <ul className={styles.div}>{content}</ul>
    </div>
  ));
}
