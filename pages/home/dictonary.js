import Header from "@/components/common/Heading";
import BackButton from "@/components/common/Button/Back";
import Dictonary from "@/components/pages/home/Dictonary.js";

export default function DictonaryPage() {
  return (
    <>
      <Header title="dictonary"></Header>
      <BackButton></BackButton>
      <Dictonary></Dictonary>
    </>
  );
}
