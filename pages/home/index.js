import Background from "@/components/home/Background.js";
import Header from "@/components/common/Heading";
import SettingButton from "@/components/common/Button/SettingButton.js";
import DailyQuotes from "@/components/home/DailyQuote.js";
import HomeContainer from "@/components/home/HomeContainer.js";
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
