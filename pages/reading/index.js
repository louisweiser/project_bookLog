import Header from "@/components/common/Heading";
import Navigation from "@/components/common/Navigation";

import BookCover from "@/components/common/test/test.js";

export default function ReadingPage() {
  return (
    <>
      <Header title="Reading"></Header>
      <BookCover height={600}></BookCover>
      <Navigation></Navigation>
    </>
  );
}
