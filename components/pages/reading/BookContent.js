import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "@/contexts/dataContext.js";

const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow-y: scroll;
  width: auto;
  max-height: 30vh;
  margin: 10px 5px 0px 5px;
  padding: 25px;
  background-color: #03314b;
  border-top: #032330 solid 2px;
  border-bottom: #032330 solid 2px;
`;

export default function BookContent() {
  const { contentData } = useContext(DataContext);

  const getAllStories = contentData.reduce((accumulator, current) => {
    return accumulator.concat(current.stories);
  }, []);

  const getAllQuotes = contentData.reduce((accumulator, current) => {
    return accumulator.concat(current.quotes);
  }, []);

  const allStoriesArray = getAllStories;
  const allQuotesArray = getAllQuotes;

  function renderAllStories() {
    const allStories = [];
    allStoriesArray.forEach((storyItem, index) => {
      allStories.push(
        <Container key={`${index}`}>
          <h3>{storyItem.title && storyItem.title}</h3>
          <p>{storyItem.text && storyItem.text}</p>
          {storyItem.page && <p>{storyItem.page}</p>}
        </Container>
      );
    });
    return allStories;
  }
  function renderAllQuotes() {
    const allQuotes = [];
    allQuotesArray.forEach((storyItem, index) => {
      allQuotes.push(
        <Container key={`${index}`}>
          {storyItem.text && <p>{storyItem.text}</p>}
          {storyItem.page && <p>{storyItem.page}</p>}
        </Container>
      );
    });
    return allQuotes;
  }

  return (
    <>
      <div>{allStoriesArray !== undefined && renderAllStories()}</div>
      <div>{allQuotesArray !== undefined && renderAllQuotes()}</div>
    </>
  );
}
