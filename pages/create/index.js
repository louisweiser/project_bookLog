import Link from "next/link";

import Background from "@/components/common/Background/index.js";
import Header from "@/components/common/Heading";
import FilterComponent from "@/components/pages/create/Filter.js";
import Form from "@/components/pages/create/Form.js";
import Navigation from "@/components/common/Navigation";

export default function CreatePage() {
  return (
    <>
      <Background></Background>
      <Header title="Create"></Header>
      <FilterComponent></FilterComponent>
      <Form></Form>
      <Navigation></Navigation>
    </>
  );
}
