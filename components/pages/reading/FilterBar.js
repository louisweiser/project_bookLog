import styled from "styled-components";

import {
  FilterSVG,
  ShuffleSVG,
  ZoomInSVG,
  ListSVG,
  ResetSVG,
} from "@/public/svgs/filter.js";

const StyledList = styled.ul`
  /*layout*/
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  /*dimension*/
  margin-left: 1px;
  padding-bottom: 8px;
  padding-top: 1px;
  /*style*/
  list-style: none;
  background-color: #03314b;
`;

const StyledListItem = styled.li``;

const StyledButton = styled.button`
  /*layout*/
  display: flex;
  /*dimension*/
  gap: 5px;
  padding: 5px 10px;
  margin: 5px;
  /*style*/
  border: 1px solid #fffefb;
  border-radius: 20px;
  background-color: #032330;

  &:hover {
    background-color: #075887;
  }
`;

export default function FilterBar() {
  return (
    <StyledList>
      <StyledListItem>
        <StyledButton>
          <FilterSVG></FilterSVG> Filter: All
        </StyledButton>
      </StyledListItem>
      <StyledListItem>
        <StyledButton>
          <ShuffleSVG></ShuffleSVG>Random
        </StyledButton>
      </StyledListItem>
      <StyledListItem>
        <StyledButton>
          <ZoomInSVG></ZoomInSVG>Details
        </StyledButton>
      </StyledListItem>
      <StyledListItem>
        <StyledButton>
          <ListSVG></ListSVG>List
        </StyledButton>
      </StyledListItem>
      <StyledListItem>
        <StyledButton>
          <ResetSVG></ResetSVG>Reset
        </StyledButton>
      </StyledListItem>
    </StyledList>
  );
}
