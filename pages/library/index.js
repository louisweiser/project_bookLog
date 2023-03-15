import Header from "@/components/common/Heading";
import BookCover from "@/components/library/Cover";
import FilterComponent from "@/components/library/Filter";
import Navigation from "@/components/common/Navigation";
import SearchComponent from "@/components/common/Search";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/pages/library.module.css";

export default function LibraryPage() {
  return (
    <>
      <Header title="Library"></Header>
      <SearchComponent></SearchComponent>
      <FilterComponent></FilterComponent>
      <ul className={styles.div}>
        <li className={styles.padding}>
          <Link href="">
            <Image
              src="/svg/image.jpg"
              alt="cover"
              height={220}
              width={150}
            ></Image>
          </Link>
        </li>
        <li className={styles.padding}>
          <Link href="">
            <Image
              src="/svg/image.jpg"
              alt="cover"
              height={220}
              width={150}
            ></Image>
          </Link>
        </li>
        <li className={styles.padding}>
          <Link href="">
            <Image
              src="/svg/image.jpg"
              alt="cover"
              height={220}
              width={150}
            ></Image>
          </Link>
        </li>
        <li className={styles.padding}>
          <Link href="">
            <div className={styles.imgcon}>
              <Image
                src="/svg/image.jpg"
                alt="cover"
                height={220}
                width={154}
              ></Image>
            </div>
          </Link>
        </li>
        <li className={styles.padding}>
          <Link href="">
            <Image
              src="/svg/image.jpg"
              alt="cover"
              height={220}
              width={150}
            ></Image>
          </Link>
        </li>
      </ul>
      <Navigation></Navigation>
    </>
  );
}
