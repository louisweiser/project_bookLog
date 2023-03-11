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
import styles from "./Navigation.module.css";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/home">
            {router.pathname === "/home" ? <HomeSVGActive /> : <HomeSVG />}
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/library">
            {router.pathname === "/library" ? (
              <LibrarySVGActive />
            ) : (
              <LibrarySVG />
            )}
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/reading">
            {router.pathname === "/reading" ? (
              <ReadingSVGActive />
            ) : (
              <ReadingSVG />
            )}
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/create">
            {router.pathname === "/create" ? (
              <CreateSVGActive />
            ) : (
              <CreateSVG />
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
