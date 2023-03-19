import Background from "@/components/pages/home/Background.js";
import Header from "@/components/common/Heading";
import SettingButton from "@/components/common/Button/Setting.js";
import DailyQuotes from "@/components/pages/home/DailyQuote.js";
import HomeContainer from "@/components/pages/home/HomeContainer.js";
import Navigation from "@/components/common/Navigation";

//main page 1/4
export default function HomePage() {
  return (
    <>
      <Background></Background>

      <Header title="BookLog"></Header>
      <SettingButton></SettingButton>
      <DailyQuotes></DailyQuotes>
      <HomeContainer></HomeContainer>
      <Navigation></Navigation>
    </>
  );
}
