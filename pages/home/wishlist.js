import Header from "@/components/common/Heading/HomeNavigation.js";
import DynamicList from "@/components/pages/home/Wishlist.js";
import Background from "@/components/common/Background/blue.js";

export default function WishListPage() {
  return (
    <>
      <Background></Background>
      <Header title={"Wishlist"}></Header>
      <DynamicList></DynamicList>
    </>
  );
}
