import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import CoverFromData from "@/components/common/Cover/coverData.js";

import { DataContext } from "@/contexts/dataContext.js";

import styles from "./renderslugbookcontent.module.css";

export default function BookDetails({ serverBook, serverContent }) {
  const router = useRouter();

  const { bookData, contentData } = useContext(DataContext);

  const [book, setBook] = useState(null);
  const [bookContent, setBookContent] = useState(null);

  useEffect(() => {
    if (bookData.length === 0 && serverBook) {
      setBook(serverBook);
      setBookContent(serverContent);
    } else {
      const book = bookData.find((book) => book.slug === router.query.slug);
      setBook(book);

      if (book) {
        const content = contentData.find((item) => item.bookID === book.bookID);
        setBookContent(content);
      }
    }
  }, [bookData, contentData, router.query.slug, serverBook, serverContent]);

  // Zeige einen Ladezustand an, wenn das Buch noch nicht vorhanden ist
  if (!book || !bookContent) {
    return <div>Loading...</div>;
  }

  const summaryArray = bookContent.summary;
  const storiesArray = bookContent.stories;
  const quotesArray = bookContent.quotes;

  function renderSummary() {
    if (!summaryArray) {
      // Story wurde nicht gefunden oder ist noch nicht geladen
      return null;
    }

    const renderedSummary = Object.values(summaryArray).map(
      (summary, index) => {
        if (typeof summary === "object" && summary.text) {
          return (
            <div key={index}>
              <p>Text: {summary.text}</p>
              <hr />
            </div>
          );
        }
        return null;
      }
    );

    return (
      <div>
        <h3>Summary:</h3>
        <hr />
        <div>{renderedSummary}</div>
      </div>
    );
  }

  function renderStories() {
    if (!storiesArray) {
      // Story wurde nicht gefunden oder ist noch nicht geladen
      return null;
    }

    const renderedStories = Object.values(storiesArray).map((story, index) => {
      if (
        typeof story === "object" &&
        story.title &&
        story.text &&
        story.page !== undefined
      ) {
        return (
          <div key={index}>
            <p>Headline: {story.title}</p>
            <p>Text: {story.text}</p>
            <p>Seite: {story.page !== null ? story.page : "Nicht verfügbar"}</p>
            <hr />
          </div>
        );
      }
      return null;
    });

    return (
      <div>
        <h3>Stories:</h3>
        <hr />
        <div>{renderedStories}</div>
      </div>
    );
  }

  function renderQuotes() {
    // If additional information is found, add it to the book object
    if (!quotesArray) {
      // Return null if no matching book is found
      return null;
    }
    const renderedQuotes = Object.values(quotesArray).map((quote, index) => {
      if (typeof quote === "object" && quote.text && quote.page !== undefined) {
        return (
          <div key={index}>
            <p>Text: {quote.text}</p>
            <p>Seite: {quote.page !== null ? quote.page : "Nicht verfügbar"}</p>
            <hr />
          </div>
        );
      }
      return null;
    });

    return (
      <div>
        <h3>Quotes:</h3>
        <div>{renderedQuotes}</div>
      </div>
    );
  }
  console.log(book);
  return (
    <>
      <div className={styles.body}>
        <div className={styles.cover}>
          <CoverFromData slug={book.slug} height={300}></CoverFromData>
        </div>
        <div>{renderSummary()}</div>
        <div>{renderQuotes()}</div>
        <div>{renderStories()}</div>
      </div>
    </>
  );
}

// Die getServerSideProps-Funktion wird für serverseitiges Rendering verwendet wenn die Daten in DataContext noch nicht vorhanden sind. Z.b. wenn die Seite über die URL geladen wird ist dies der Fall
export async function getServerSideProps(context) {
  // Wenn es sich um eine clientseitige Anfrage handelt oder wenn der DataContext bereits Buchdaten enthält, werden keine Daten gefetcht
  const { req, query } = context;
  if (!req || (query && query.hasDataContext === "true")) {
    return { props: { serverBook: null, serverContent: null } };
  }

  // Bei einer serverseitigen Anfrage oder wenn DataContext nicht vorhanden ist, werden die Buchdaten anhand des Slugs aus der Datenbank geholt
  const slug = context.params.slug;
  const response = await fetch(`http://localhost:3000//api/books`);
  const bookData = await response.json();
  const index = bookData.findIndex((book) => book.slug === slug);

  // Wenn das Buch nicht gefunden wurde, wird ein "notFound"-Status zurückgegeben
  if (index === -1) {
    return {
      notFound: true,
    };
  }

  // Inhaltsdaten für das gefundene Buch aus der Datenbank abrufen
  const contentResponse = await fetch(`http://localhost:3000//api/bookcontent`);
  const contentData = await contentResponse.json();
  const filteredContent = contentData.filter(
    (item) => item.bookID === bookData[index].bookID
  );

  // das gefundene Buch wird als serverBook-Prop und den gefilterten Inhalt als serverContent-Prop zurückgegeben
  return {
    props: {
      serverBook: bookData[index],
      serverContent:
        filteredContent.length > 0
          ? filteredContent[0]
          : { summary: null, quotes: null, stories: null },
    },
  };
}
