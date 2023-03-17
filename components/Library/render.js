import Link from "next/link";
import Image from "next/image";

import { genreData } from "@/public/data/genre.js";

import styles from "./render.module.css";

let content = [];
for (let i = 0; i < 5; i++) {
  content.push(
    <li className={styles.padding}>
      <Link href="">
        <Image
          className={styles.imgcon}
          src="/images/image.jpg"
          alt="cover"
          height={220}
          width={150}
        ></Image>
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
