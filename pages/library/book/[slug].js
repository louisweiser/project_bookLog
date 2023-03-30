import Background from "@/components/common/Background/blue.js";
import Header from "@/components/common/Heading/Detail.js";

import BookDetails from "@/components/pages/library/RenderSlugBookContent.js";

export default function BookDetailPage() {
  return (
    <>
      <Background></Background>
      <Header></Header>
      <BookDetails></BookDetails>
    </>
  );
}
