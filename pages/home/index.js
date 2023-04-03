import Background from "@/components/common/Background/Illustration.js";
import Header from "@/components/common/Heading/HomePage.js";
import DailyQuotes from "@/components/pages/home/DailyQuote.js";
import Navigation from "@/components/common/Navigation";

export default function HomePage() {
  return (
    <>
      <Background color={"#03314b"}></Background>
      <Header title="BookLog"></Header>
      <DailyQuotes></DailyQuotes>
      <Navigation></Navigation>
    </>
  );
}
