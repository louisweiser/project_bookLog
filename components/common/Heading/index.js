import styles from "./index.module.css";

export default function Header({ title }) {
  return (
    <header>
      <h1 className={styles.header}>{title}</h1>
    </header>
  );
}
