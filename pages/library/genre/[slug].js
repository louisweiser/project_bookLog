import React from "react";
import { useRouter } from "next/router";

import Background from "@/components/common/Background/blue.js";
import Header from "@/components/common/Heading/Collection.js";
import GenreCoveLibrary from "@/components/pages/library/GenreCoverLibrary.js";

export default function GenreLibrary() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Background></Background>
      <Header title={slug}></Header>
      <GenreCoveLibrary></GenreCoveLibrary>
    </>
  );
}
