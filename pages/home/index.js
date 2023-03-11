import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import SettingButton from "@/components/Buttons/SettingButton.js";

export default function HomePage() {
  return (
    <>
      <Header title="BookLog App"></Header>
      <Navigation></Navigation>
      <SettingButton></SettingButton>
    </>
  );
}
