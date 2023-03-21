import Link from "next/link";

import { GearSVG } from "@/public/svgs/router.js";

import styles from "./setting.module.css";

export default function SettingButton() {
  return (
    <Link href="/home/settings" className={styles.topRight}>
      <GearSVG></GearSVG>
    </Link>
  );
}
