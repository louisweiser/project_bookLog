import React from "react";
import styled from "styled-components";
import {
  FilterSVG,
  ShuffleSVG,
  ZoomInSVG,
  ListSVG,
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
          <FilterSVG></FilterSVG> Filter: All
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <ShuffleSVG></ShuffleSVG>Random
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <ZoomInSVG></ZoomInSVG>Details
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <ListSVG></ListSVG>List
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <ResetSVG></ResetSVG>Reset
        </Button>
      </ListItem>
    </List>
  );
}
