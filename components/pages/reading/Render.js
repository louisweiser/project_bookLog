import { useContext } from "react"; //global state for searching container rendering

import { DataContext } from "@/contexts/dataContext.js";

import styles from "./render.module.css";

export default function Render() {
  const { storyData } = useContext(DataContext);
  console.log(storyData);

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
            <p>{story.page}</p>
          </div>
        );
      }
    });

    return allStories;
  };

  return <div>{renderStories()}</div>;
}
