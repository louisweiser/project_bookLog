import Header from "@/components/common/Heading";
import Form4Create from "@/components/common/Form/FormForCreate";
import Navigation from "@/components/common/Navigation";
import BackButton from "@/components/common/Button/BackButton.js";

export default function CreateNewBookPage() {
  return (
    <>
      <Header title="Create"></Header>
      <BackButton></BackButton>
      <Form4Create></Form4Create>
      <Navigation></Navigation>
    </>
  );
}
