import styled from "styled-components";

import BackLibraryButton from "@/components/common/Link/BackTo.js";

const StyledHeader = styled.header`
  /*layout*/
  position: relative;
  /*dimension*/
  width: 100%;
  height: 36px;
  /*style*/
  background-color: #03314b;
`;

const StyledContainer = styled.div`
  /*layout*/
  position: absolute;
  left: 9px;
  top: 11px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <BackLibraryButton target={"create"}></BackLibraryButton>
      </StyledContainer>
    </StyledHeader>
  );
}
