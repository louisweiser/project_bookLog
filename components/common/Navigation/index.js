import Link from "next/link";
import {
  HomeSVG,
  LibrarySVG,
  ReadingSVG,
  CreateSVG,
  CreateSVGActive,
  LibrarySVGActive,
  ReadingSVGActive,
  HomeSVGActive,
} from "@/public/svgs/Navigation.js";
import styles from "./navigation.module.css";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <Link href="/home">
          <li className={styles.navbarListItem}>
            {router.pathname === "/home" ? <HomeSVGActive /> : <HomeSVG />}

            <h5 className={styles.h5}>Home</h5>
          </li>
        </Link>
        <Link href="/library">
          <li className={styles.navbarListItem}>
            {router.pathname === "/library" ? (
              <LibrarySVGActive />
            ) : (
              <LibrarySVG />
            )}

            <h5 className={styles.h5}>Library</h5>
          </li>
        </Link>
        <Link href="/reading">
          <li className={styles.navbarListItem}>
            {router.pathname === "/reading" ? (
              <ReadingSVGActive />
            ) : (
              <ReadingSVG />
            )}

            <h5 className={styles.h5}>Read</h5>
          </li>
        </Link>
        <Link href="/create">
          <li className={styles.navbarListItem}>
            {router.pathname === "/create" ? (
              <CreateSVGActive />
            ) : (
              <CreateSVG />
            )}

            <h5 className={styles.h5}>Create</h5>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
