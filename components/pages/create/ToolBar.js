import { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";

import { MyContext } from "@/contexts/myContext.js";

import {
  QuoteSVG,
  StorySVG,
  SummarySVG,
  AddBookSVG,
  CurrentBookSVG,
  ArrowRightSVG,
  ResetSVG,
} from "@/public/svgs/filter.js";

const List = styled.ul`
  /*layout*/
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  /*dimension*/
  margin-left: 1px;
  padding-top: 4px;
  padding-bottom: 9px;
  /*style*/
  list-style: none;
  background-color: #03314b;
`;

const ListItem = styled.li``;

const Button = styled.button`
  /*layout*/
  display: flex;
  border: 1px solid #fffefb;
  gap: 5px;
  /*dimension*/
  padding: 5px 10px;
  margin: 5px;
  font-size: 13px;
  /*style*/
  border-radius: 20px;
  background-color: ${(props) => (props.active ? "#075887" : "#032330")};
`;

export default function FilterComponent() {
  const { setMyStateCreate } = useContext(MyContext);
  const { theme, setTheme } = useContext(MyContext);
  const { setInput1 } = useContext(MyContext);
  const { setInput2 } = useContext(MyContext);
  const { setInput3 } = useContext(MyContext);

  const handleOnClick = () => {
    setMyStateCreate(true);
  };

  const handleOnClear = () => {
    setInput1("");
    setInput2("");
    setInput3("");
  };

  return (
    <List>
      <ListItem>
        <Button
          active={theme === "quotes"}
          onClick={() => {
            setTheme("quotes");
          }}
        >
          <QuoteSVG />
          Quote
        </Button>
      </ListItem>
      <ListItem>
        <Button
          active={theme === "stories"}
          onClick={() => {
            setTheme("stories");
          }}
        >
          <StorySVG />
          Story
        </Button>
      </ListItem>
      <ListItem>
        <Button
          active={theme === "summary"}
          onClick={() => {
            setTheme("summary");
          }}
        >
          <SummarySVG />
          Summary
        </Button>
      </ListItem>
      <ListItem>
        <Link href={"/create/newbook"}>
          <Button>
            <AddBookSVG />
            New Book
            <ArrowRightSVG />
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Button onClick={handleOnClick}>
          <CurrentBookSVG />
          Current Book
          <ArrowRightSVG />
        </Button>
      </ListItem>
      <ListItem>
        <Button onClick={handleOnClear}>
          <ResetSVG />
          Reset
        </Button>
      </ListItem>
    </List>
  );
}
