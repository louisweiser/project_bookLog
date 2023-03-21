import Background from "@/components/common/Background/index.js";
import Header from "@/components/common/Heading";
import SettingButton from "@/components/common/Link/Setting.js";
import DailyQuotes from "@/components/pages/home/DailyQuote.js";
import HomeNavigation from "@/components/pages/home/HomeNavigation.js";
import Navigation from "@/components/common/Navigation";

//main page 1/4
export default function HomePage() {
  return (
    <>
      <Background></Background>

      <Header title="BookLog"></Header>
      <SettingButton></SettingButton>
      <DailyQuotes></DailyQuotes>
      <HomeNavigation></HomeNavigation>
      <Navigation></Navigation>
    </>
  );
}
