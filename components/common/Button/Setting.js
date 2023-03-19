import Link from "next/link";
import styles from "./setting.module.css";
import { GearSVG } from "@/public/svgs/router.js";

export default function SettingButton() {
  return (
    <Link href="/home/settings" className={styles.topRight}>
      <GearSVG></GearSVG>
    </Link>
  );
}
