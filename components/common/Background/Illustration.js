import { useContext } from "react";
import styled from "styled-components";

import { BackgroundSVG } from "@/public/svgs/background.js";

import { MyContext } from "@/contexts/myContext.js";

const StyledContainer = styled.div`
  box-sizing: content-box;
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
`;

export default function Background({ color }) {
  const { screenWidth } = useContext(MyContext);

  return (
    <StyledContainer>
      <BackgroundSVG color={color} width={screenWidth} />
    </StyledContainer>
  );
}
