import Header from "@/components/Header";
import Form4Create from "@/components/Form/FormForCreate";
import Navigation from "@/components/Navigation";
import BackButton from "@/components/Button/BackButton.js";

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
