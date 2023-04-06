// components/BlurredBackground.js
import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  filter: blur(20px);
  opacity: 0.8;
`;

export default function BlurredBackground() {
  return (
    <Container>
      <StyledImage
        className="background-image"
        src={`/images/cover/imageA.jpg`}
        alt={"alt"}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      />
    </Container>
  );
}
