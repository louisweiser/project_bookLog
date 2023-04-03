import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import Background from "@/components/common/Background/Illustration.js";
import Header from "@/components/common/Heading/GenreDetailPage.js";
import GenreCoverLibrary from "@/components/pages/library/GenreCoverLibrary.js";

const Container = styled.div`
  display: flex;
  padding: 7.5px;
  width: 100vw;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-between;
`;

const Padding = styled.div`
  padding: 5px;
`;

export default function GenreLibrary() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Background color={"#03314b"}></Background>
      <Header title={slug}></Header>
      <GenreCoverLibrary></GenreCoverLibrary>
      <Container>
        <Padding></Padding>
      </Container>
    </>
  );
}
