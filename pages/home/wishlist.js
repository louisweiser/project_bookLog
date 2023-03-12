import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import BackButton from "@/components/Button/BackButton.js";
import DynamicList from "@/components/Home/list.js";

export default function WishListPage() {
  return (
    <>
      <Header title={"wish list"}></Header>
      <BackButton></BackButton>
      <DynamicList></DynamicList>
      <Navigation></Navigation>
    </>
  );
}
