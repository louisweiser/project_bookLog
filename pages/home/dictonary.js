import Header from "@/components/Header";
import BackButton from "@/components/Button/BackButton";
import DynamicTable from "@/components/Home/table.js";
import Navigation from "@/components/Navigation";

export default function DictonaryPage() {
  return (
    <>
      <Header title="dictonary"></Header>
      <BackButton></BackButton>
      <DynamicTable></DynamicTable>

      <Navigation></Navigation>
    </>
  );
}
