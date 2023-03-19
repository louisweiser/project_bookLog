import Background from "@/components/common/Background/index.js";
import Header from "@/components/common/Heading";
import SettingButton from "@/components/common/Button/Setting.js";
import DailyQuotes from "@/components/pages/home/DailyQuote.js";
import HomeRouter from "@/components/pages/home/HomeRouter.js";
import Navigation from "@/components/common/Navigation";

//main page 1/4
export default function HomePage() {
  return (
    <>
      <Background></Background>

      <Header title="BookLog"></Header>
      <SettingButton></SettingButton>
      <DailyQuotes></DailyQuotes>
      <HomeRouter></HomeRouter>
      <Navigation></Navigation>
    </>
  );
}
