import Head from "next/head";
import styles from "@/styles/components/header.module.css";
import { useRouter } from "next/router";

function Header({ title }) {
  const router = useRouter();
  return (
    <header>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className={styles.header}>{title}</h1>
    </header>
  );
}

export default Header;
