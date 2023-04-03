import Background from "@/components/common/Background/Illustration.js";
import Header from "@/components/common/Heading/DetailPage.js";

import BookDetails from "@/components/pages/library/BookDetails.js";

export default function BookDetailPage() {
  return (
    <>
      <Background color={"#03314b"}></Background>
      <Header></Header>
      <BookDetails></BookDetails>
    </>
  );
}
