import styled from "styled-components";
import {
  ShelfSVG,
  CollectionSVG,
  ZoomOutSVG,
  RecentSVG,
  FilterSVG,
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
  padding: 5px 10px;
  margin: 5px;
  gap: 5px;
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
          <ShelfSVG></ShelfSVG>
          Shelf
        </StyledButton>
      </StyledListItem>
      <StyledListItem>
        <StyledButton>
          <CollectionSVG></CollectionSVG>
          Genre
        </StyledButton>
      </StyledListItem>
      <StyledListItem>
        <StyledButton>
          <ZoomOutSVG></ZoomOutSVG>
          Overview
        </StyledButton>
      </StyledListItem>
      <StyledListItem>
        <StyledButton>
          <RecentSVG></RecentSVG>
          Recent
        </StyledButton>
      </StyledListItem>
      <StyledListItem>
        <StyledButton>
          <FilterSVG></FilterSVG>
          Filter: All
        </StyledButton>
      </StyledListItem>
      <StyledListItem>
        <StyledButton>
          <ResetSVG></ResetSVG>
          Reset
        </StyledButton>
      </StyledListItem>
    </StyledList>
  );
}
