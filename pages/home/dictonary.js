import Header from "@/components/Header";
import BackButton from "@/components/Button/BackButton";
import DynamicTable from "@/components/Home/table.js";
import Navigation from "@/components/Navigation";
import SearchComponent from "@/components/Search";

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
