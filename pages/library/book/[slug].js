import { useRouter } from "next/router";

import { useContext } from "react";
import { DataContext } from "@/contexts/dataContext.js";

import Background from "@/components/common/Background/blue.js";
import Header from "@/components/common/Heading/Detail.js";
import CoverFromData from "@/components/common/Cover/coverData.js";

import { bookMetaData } from "@/public/data/bookmeta.js";
import { bookSummary } from "@/public/data/bookentries/booksummary.js";
import { bookStories } from "@/public/data/bookentries/bookstory.js";

import styles from "./slug.module.css";

function BookDetail() {
  const router = useRouter();

  const { bookData } = useContext(DataContext);

  const index = bookData.findIndex((book) => book.slug === router.query.slug);

  //const summary = bookSummary[result.id - 1];
  //const story1 = bookStories[result.id - 1]?.[0];
  //const story2 = bookStories[result.id - 1]?.[1];

  return (
    <>
      <Background></Background>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.cover}>
          <CoverFromData
            slug={bookData[index].slug}
            height={300}
          ></CoverFromData>
        </div>
        {/* {summary && (
          <div className={styles.summary}>
            <h3>Summary :</h3>
            <h4>{summary.summary}</h4>
          </div>
        )}
        {story1 && (
          <div className={styles.summary}>
            <h3>Storie 1: {story1.title}</h3>
            <h4>{story1.text}</h4>
          </div>
        )}
        {story2 && (
          <div className={styles.summary}>
            <h3>Storie 2: {story2.title}</h3>
            <h4>{story2.text}</h4>
          </div>
        )} */}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  function searchArray(array, searchTerm) {
    for (let i = 0; i < array.length; i++) {
      const object = array[i];

      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const value = object[key];

          if (value === searchTerm) {
            return object;
          }
        }
      }
    }

    return null;
  }

  const result = searchArray(bookMetaData, slug);

  return {
    props: {
      result,
    },
  };
}

export default BookDetail;
