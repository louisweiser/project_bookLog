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
} from "@/public/svg/Navigation.js";
import styles from "@/styles/components/navigation.module.css";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarListItem}>
          <Link href="/home">
            {router.pathname === "/home" ? <HomeSVGActive /> : <HomeSVG />}
          </Link>
          <h5 className={styles.h5}>Home</h5>
        </li>
        <li className={styles.navbarListItem}>
          <Link href="/library">
            {router.pathname === "/library" ? (
              <LibrarySVGActive />
            ) : (
              <LibrarySVG />
            )}
          </Link>
          <h5 className={styles.h5}>Library</h5>
        </li>
        <li className={styles.navbarListItem}>
          <Link href="/reading">
            {router.pathname === "/reading" ? (
              <ReadingSVGActive />
            ) : (
              <ReadingSVG />
            )}
          </Link>
          <h5 className={styles.h5}>Read</h5>
        </li>
        <li className={styles.navbarListItem}>
          <Link href="/create">
            {router.pathname === "/create" ? (
              <CreateSVGActive />
            ) : (
              <CreateSVG />
            )}
          </Link>
          <h5 className={styles.h5}>Create</h5>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
