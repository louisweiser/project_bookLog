import React, { useState, useContext } from "react";
import Link from "next/link";
import { MyContext } from "@/contexts/myContext.js";
import { DataContext } from "@/contexts/dataContext.js";
import CoverFromData from "@/components/common/Cover/BookCover.js";
import searchBooks from "@/components/common/Search";
import { BackSVG } from "@/public/svgs/router";
import styled, { keyframes } from "styled-components";

const SlideUp = keyframes`
  0% {
    top: calc(52px);
  }
  100% {
    top: -100%;
  }
`;

const SlideDown = keyframes`
  0% {
    top: -100%;
  }
  100% {
    top: calc(52px);
  }
`;

const Animation = keyframes`
  0% {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
  100% {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0;
  }
`;

const Background = styled.div`
  background-color: #032330;
  height: 62px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
`;

const SearchField = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: ${({ initialHide, myState }) =>
    initialHide ? "42px" : myState ? "62px" : "42px"};
  margin-bottom: 10px;
  padding-left: 5px;
  gap: 10px;
  border: none;
  background-color: #03314b;
  border-bottom: ${({ myState }) => (myState ? "5px solid #032330" : "none")};
`;

const SearchInputField = styled.input`
  width: calc(100vw - 20px);
  height: 37px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background: none;
  outline: none;
  background-color: #03314b;
`;

const ResultField = styled.div`
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: calc(100vh - 37px);
  background-color: #03314b;
  animation: ${({ initialHide, myState }) =>
      initialHide ? "none" : myState ? SlideDown : SlideUp}
    ${({ initialHide }) => (initialHide ? "0s" : "0.5s")} ease-in-out forwards;
  z-index: 1;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: calc(100vh - 57px);
`;

const Row = styled.li`
  display: flex;
  flex-direction: row;
  margin: 20px 10px 0 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 8px;
`;

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [initialHide, setInitialHide] = useState(true);
  const { myState, setMyState } = useContext(MyContext);
  const { bookData } = useContext(DataContext);

  const searchResults = searchBooks(searchTerm, bookData);

  const handleBackClick = () => {
    setMyState(false);
    setSearchTerm("");
  };

  const handleOnClick = () => {
    setMyState(true);
    setInitialHide(false);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Background>
        <SearchField initialHide={initialHide} myState={myState}>
          {myState && !initialHide && (
            <button onClick={handleBackClick}>
              <BackSVG></BackSVG>
            </button>
          )}{" "}
          <SearchInputField
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onClick={handleOnClick}
            placeholder="  search ..."
          />
        </SearchField>
      </Background>
      <ResultField initialHide={initialHide} myState={myState}>
        {searchTerm !== "" && (
          <List>
            {searchResults.length !== 0 ? (
              searchResults.map((item) => (
                <Link href={`/library/book/${item.slug}`} key={item.slug}>
                  <Row>
                    <CoverFromData
                      slug={item.slug}
                      height={100}
                    ></CoverFromData>
                    <Column>
                      <h4>
                        {item.title} {item.subtitle}
                      </h4>
                      <h5>von {item.author}</h5>
                    </Column>
                  </Row>
                </Link>
              ))
            ) : (
              <h1>no result like {searchTerm}</h1>
            )}
          </List>
        )}
      </ResultField>
    </>
  );
}
