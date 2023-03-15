import Header from "@/components/common/Heading";
import BackButton from "@/components/common/Button/BackButton";
import DynamicTable from "@/components/home/table.js";
import Navigation from "@/components/common/Navigation";
import SearchComponent from "@/components/common/Search";

export default function DictonaryPage() {
  return (
    <>
      <Header title="dictonary"></Header>
      <SearchComponent></SearchComponent>
      <BackButton></BackButton>
      <DynamicTable></DynamicTable>
    </>
  );
}
