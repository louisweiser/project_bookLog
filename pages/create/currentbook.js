import SearchComponent from "@/components/Search";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import BackButton from "@/components/Button/BackButton.js";

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
