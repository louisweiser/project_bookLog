import Header from "@/components/common/Heading";
import SettingButton from "@/components/common/Button/SettingButton.js";
import DailyQuotes from "@/components/home/DailyQuote.js";
import HomePageButton from "@/components/common/Button/homePageButton";
import Navigation from "@/components/common/Navigation";

import { TestSVG } from "@/public/svgs/homeSVG.js";

import styles from "@/styles/pages/home.module.css";

//main page 1/4
export default function HomePage() {
  return (
    <>
      <Header title="BookLog"></Header>
      <SettingButton></SettingButton>
      <div className={styles.containerbody}>
        <TestSVG />
      </div>
      <DailyQuotes></DailyQuotes>
      <div className={styles.container}>
        <HomePageButton page={"wishlist"}></HomePageButton>
        <HomePageButton page={"dictonary"}></HomePageButton>
        <HomePageButton page={"current book"}></HomePageButton>
      </div>
      <Navigation></Navigation>
    </>
  );
}
