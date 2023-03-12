import Header from "@/components/Header";
import Form4Create from "@/components/Form/FormForCreate";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function CreatePage() {
  return (
    <>
      <Header title="Create"></Header>
      <Link href="./create/newbook">add book</Link>
      <br />
      <Link href="./create/currentbook">choose current book</Link>
      <Navigation></Navigation>
    </>
  );
}
