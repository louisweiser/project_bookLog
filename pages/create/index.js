import Link from "next/link";

import Header from "@/components/common/Heading";
import Navigation from "@/components/common/Navigation";

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
