import Background from "@/components/common/Background/index.js";
import Header from "@/components/common/Heading";
import FilterComponent from "@/components/pages/create/Filter.js";
import Form from "@/components/pages/create/Form.js";
import Currentbook from "@/components/pages/create/Search.js";
import Navigation from "@/components/common/Navigation";

export default function CreatePage() {
  return (
    <>
      <Background></Background>
      <FilterComponent></FilterComponent>
      <Form></Form>
      <Currentbook></Currentbook>
      <Navigation></Navigation>
    </>
  );
}
