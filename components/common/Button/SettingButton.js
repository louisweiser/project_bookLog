import Link from "next/link";
import styles from "./button.module.css";
import { GearSVG } from "@/public/svgs/headerSVGs";

export default function SettingButton() {
  return (
    <Link href="/home/settings" className={styles.topRight}>
      <GearSVG></GearSVG>
    </Link>
  );
}
