import styled from "styled-components";

import Background from "@/components/common/Background/Illustration.js";
import SearchPage from "@/components/pages/reading/Search.js";
import FilterComponent from "@/components/pages/reading/Filter.js";
import Render from "@/components/pages/reading/RenderContent.js";
import Navigation from "@/components/common/Navigation";

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh - 53px);
`;
export default function ReadingPage() {
  return (
    <>
      <Background color={"#b69b8a"}></Background>
      <StyledContainer>
        <SearchPage></SearchPage>
        {/* <FilterComponent></FilterComponent> */}
        <Render></Render>
      </StyledContainer>
      <Navigation></Navigation>
    </>
  );
}
