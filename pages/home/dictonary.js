import Header from "@/components/common/Heading";
import BackButton from "@/components/common/Button/BackButton";
import DynamicTable from "@/components/home/Dictonary.js";

export default function DictonaryPage() {
  return (
    <>
      <Header title="dictonary"></Header>
      <BackButton></BackButton>
      <DynamicTable></DynamicTable>
    </>
  );
}
