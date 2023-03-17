import Header from "@/components/common/Heading";
import Navigation from "@/components/common/Navigation";
import Test from "@/components/common/component/search.js";

import { bookData } from "../../public/data/book.js";

export default function ReadingPage() {
  return (
    <>
      <Header title="Reading"></Header>
      <Test></Test>
      <Navigation></Navigation>
    </>
  );
}
