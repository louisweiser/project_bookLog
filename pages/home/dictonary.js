import Header from "@/components/common/Heading/HomeNavigation.js";
import Dictonary from "@/components/pages/home/Dictonary.js";
import Background from "@/components/common/Background/blue.js";

export default function DictonaryPage() {
  return (
    <>
      <Background></Background>
      <Header title="Dictonary"></Header>
      <Dictonary></Dictonary>
    </>
  );
}
