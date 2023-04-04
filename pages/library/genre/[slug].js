import { useRouter } from "next/router";

import Background from "@/components/common/Background/Illustration.js";
import Header from "@/components/common/Heading/GenreDetailPage.js";
import GenreCoverLibrary from "@/components/pages/library/GenreCoverLibrary.js";

export default function GenreLibrary() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Background color={"#03314b"}></Background>
      <Header title={slug}></Header>
      <GenreCoverLibrary></GenreCoverLibrary>
    </>
  );
}
