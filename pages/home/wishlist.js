import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import BackButton from "@/components/Button/BackButton.js";
import DynamicList from "@/components/Home/list.js";
import SearchComponent from "@/components/Search";

export default function WishListPage() {
  return (
    <>
      <Header title={"wish list"}></Header>
      <SearchComponent></SearchComponent>
      <BackButton></BackButton>
      <DynamicList></DynamicList>
    </>
  );
}
