import Header from "@/components/common/Heading";
import BackButton from "@/components/common/Button/Back.js";
import DynamicList from "@/components/pages/home/Wishlist.js";

export default function WishListPage() {
  return (
    <>
      <Header title={"wish list"}></Header>
      <BackButton></BackButton>
      <DynamicList></DynamicList>
    </>
  );
}
