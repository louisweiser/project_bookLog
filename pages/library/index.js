import styled from "styled-components";

import Background from "@/components/common/Background/Illustration.js";
import SearchPage from "@/components/pages/library/SearchBar.js";
import FilterComponent from "@/components/pages/library/FilterBar";
import BookLibrary from "@/components/pages/library/BookLibrary.js";
import Navigation from "@/components/common/Navigation";

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh - 54px);
`;

export default function LibraryPage() {
  return (
    <>
      <Background color={"#03314b"}></Background>
      <StyledContainer>
        <SearchPage></SearchPage>
        {/* <FilterComponent></FilterComponent> */}
        <BookLibrary></BookLibrary>
      </StyledContainer>
      <Navigation></Navigation>
    </>
  );
}
