import Header from "@/components/Header";
import SettingButton from "@/components/Button/SettingButton.js";
import DailyQuotes from "@/components/Home/DailyQuote.js";
import HomePageButton from "@/components/Button/homePageButton";
import Navigation from "@/components/Navigation";

import styles from "@/styles/pages/home.module.css";

export default function HomePage() {
  return (
    <>
      <Header title="BookLog"></Header>
      <SettingButton></SettingButton>
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
