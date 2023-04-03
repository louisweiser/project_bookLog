import FilterComponent from "@/components/pages/create/ToolBar.js";
import Form from "@/components/pages/create/FormForNote.js";
import Currentbook from "@/components/pages/create/Search.js";
import Navigation from "@/components/common/Navigation";

export default function CreatePage() {
  return (
    <>
      <FilterComponent></FilterComponent>
      <Form></Form>
      <Currentbook></Currentbook>
      <Navigation></Navigation>
    </>
  );
}
