import Header from "@/components/common/Heading";
import BackButton from "@/components/common/Button/BackButton.js";
import DynamicList from "@/components/home/Wishlist.js";
import SearchComponent from "@/components/common/Search";

export default function WishListPage() {
  return (
    <>
      <Header title={"wish list"}></Header>
      <BackButton></BackButton>
      <DynamicList></DynamicList>
    </>
  );
}
