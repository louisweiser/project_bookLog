import { useContext } from "react"; //global state for searching container rendering

import { DataContext } from "@/contexts/dataContext.js";

import styles from "./render.module.css";

export default function Render() {
  const { bookData, contentData } = useContext(DataContext);

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
        <div key={`${index}`} className={styles.container}>
          <h3>{storyItem.title && storyItem.title}</h3>
          <p>{storyItem.text && storyItem.text}</p>
          {storyItem.page && <p>{storyItem.page}</p>}
        </div>
      );
    });
    return allStories;
  }
  function renderAllQuotes() {
    const allQuotes = [];
    allQuotesArray.forEach((storyItem, index) => {
      allQuotes.push(
        <div key={`${index}`} className={styles.container}>
          {storyItem.text && <p>{storyItem.text}</p>}
          {storyItem.page && <p>{storyItem.page}</p>}
        </div>
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
