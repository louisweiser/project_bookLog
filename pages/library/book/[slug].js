import BackgroundIllustration from "@/components/common/Background/Illustration.js";
import Header from "@/components/common/Heading/DetailPage.js";
import BookDetails from "@/components/pages/library/BookDetails.js";

export default function BookDetailPage() {
  return (
    <>
      <BackgroundIllustration color={"#03314b"}></BackgroundIllustration>
      <Header></Header>
      <BookDetails></BookDetails>
    </>
  );
}
