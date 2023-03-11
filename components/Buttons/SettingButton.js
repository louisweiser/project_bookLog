import Link from "next/link";
import styles from "./Button.module.css";

export default function SettingButton() {
  return (
    <Link href="/home/settings" className={styles.topRight}>
      setting
    </Link>
  );
}
