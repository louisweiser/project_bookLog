import { useContext } from "react"; //global state for searching container rendering

import { DataContext } from "@/contexts/dataContext.js";

import styles from "./render.module.css";

export default function Render() {
  const { storyData, quoteData } = useContext(DataContext);

  console.log("sories", storyData);
  const renderStories = () => {
    const allStories = [];

    storyData.forEach((storyItem) => {
      //rendern aller stories
      for (const key in storyItem) {
        if (key === "_id" || key === "bookID") continue; //_id und bookID sollen übersprungen und nicht gerendert werden
        const story = storyItem[key];
        allStories.push(
          <div key={`${storyItem._id}-${key}`} className={styles.container}>
            <h3>{story.title}</h3>
            <p>{story.text}</p>
            {story.page && <p>{story.page}</p>}
          </div>
        );
      }
    });
    return allStories;
  };

  const renderQuotes = () => {
    const allQuotes = [];
    console.log(quoteData);
    quoteData.forEach((quoteItem) => {
      //rendern aller quotes
      for (const key in quoteItem) {
        if (key === "_id" || key === "bookID") continue; //_id und bookID sollen übersprungen und nicht gerendert werden
        const quote = quoteItem[key];
        allQuotes.push(
          <div key={`${quoteItem._id}-${key}`} className={styles.container}>
            <p>{quote.text}</p>
            {quote.page && <p>{quote.page}</p>}
          </div>
        );
      }
    });
    return allQuotes;
  };

  return (
    <>
      <div>{renderStories()}</div>
      <div>{renderQuotes()}</div>
    </>
  );
}
