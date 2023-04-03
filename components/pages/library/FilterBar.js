import styled from "styled-components";
import {
  ShelfSVG,
  CollectionSVG,
  ZoomOutSVG,
  RecentSVG,
  FilterSVG,
  ResetSVG,
} from "@/public/svgs/filter.js";

const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  margin-left: 1px;
  padding-bottom: 8px;
  padding-top: 1px;
  list-style: none;
  background-color: #03314b;
`;

const ListItem = styled.li``;

const Button = styled.button`
  border: 1px solid #fffefb;
  display: flex;
  gap: 5px;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 20px;
  background-color: #032330;

  &:hover {
    background-color: #075887;
  }
`;

export default function FilterComponent() {
  return (
    <List>
      <ListItem>
        <Button>
          <ShelfSVG></ShelfSVG>
          Shelf
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <CollectionSVG></CollectionSVG>
          Genre
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <ZoomOutSVG></ZoomOutSVG>
          Overview
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <RecentSVG></RecentSVG>
          Recent
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <FilterSVG></FilterSVG>
          Filter: All
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <ResetSVG></ResetSVG>
          Reset
        </Button>
      </ListItem>
    </List>
  );
}
