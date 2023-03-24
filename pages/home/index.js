import Background from "@/components/common/Background/index.js";
import Header from "@/components/common/Heading/Home.js";
import DailyQuotes from "@/components/pages/home/DailyQuote.js";
import HomeNavigation from "@/components/pages/home/HomeNavigation.js";
import Navigation from "@/components/common/Navigation";

import Image from "next/image";

import styles from "@/styles/pages/home.module.css";

//main page 1/4
export default function HomePage() {
  return (
    <>
      <Background></Background>
      {/*  <div className={styles.back}>
        <Image
          src="/images/bookwallpaper.jpg"
          width={500}
          height={1010}
          alt="img"
        ></Image>
      </div> */}
      <Header title="BookLog"></Header>
      <DailyQuotes></DailyQuotes>
      <HomeNavigation></HomeNavigation>
      <Navigation></Navigation>
    </>
  );
}
