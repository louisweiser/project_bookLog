import Header from "@/components/common/Heading";
import Navigation from "@/components/common/Navigation";
import BackButton from "@/components/common/Button/BackButton.js";
import DynamicList from "@/components/home/list.js";
import SearchComponent from "@/components/common/Search";

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
