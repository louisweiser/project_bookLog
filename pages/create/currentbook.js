import SearchComponent from "@/components/common/Search";
import Navigation from "@/components/common/Navigation";
import Header from "@/components/common/Heading";
import BackButton from "@/components/common/Button/Back.js";

export default function SetCurrentbookPage() {
  return (
    <>
      <Header title="Create"></Header>
      <BackButton></BackButton>
      <SearchComponent></SearchComponent>
      <Navigation></Navigation>
    </>
  );
}
