import Link from "next/link";
import styles from "@/styles/components/Buttons/button.module.css";
import { GearSVG } from "@/public/svg/headerSVGs";

export default function SettingButton() {
  return (
    <Link href="/home/settings" className={styles.topRight}>
      <GearSVG></GearSVG>
    </Link>
  );
}
