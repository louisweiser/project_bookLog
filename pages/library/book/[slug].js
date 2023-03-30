import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/contexts/dataContext.js";
import Background from "@/components/common/Background/blue.js";
import Header from "@/components/common/Heading/Detail.js";
import CoverFromData from "@/components/common/Cover/coverData.js";
import styles from "./slug.module.css";

// Die BookDetail-Komponente erhält das serverseitig gefetchte Buch als Prop namens "serverBook"
function BookDetail({ serverBook }) {
  const router = useRouter();

  // DataContext verwenden, um auf die Buchdaten zuzugreifen
  const { bookData, contentData, summaryData } = useContext(DataContext);

  function findBookBySlug() {
    const book = bookData.find((book) => book.slug === router.query.slug);

    if (!book || !bookData) {
      // Buch wurde nicht gefunden oder Daten noch nicht geladen
      return null;
    }

    const filteredArray = contentData.filter(
      (item) => item.bookID === book.bookID
    );
    return filteredArray.length > 0
      ? filteredArray[0]
      : { summary: null, quotes: null, stories: null };
  }

  const bookBySlug = findBookBySlug();
  const summaryArray = bookBySlug.summary;
  const storiesArray = bookBySlug.stories;
  const quotesArray = bookBySlug.quotes;
  console.log("daten :", summaryArray, storiesArray, quotesArray);

  // Lokaler State für das aktuelle Buch
  const [book, setBook] = useState(serverBook);
  // Der useEffect-Hook wird ausgeführt, wenn sich bookData oder router.query.slug ändern
  useEffect(() => {
    // Wenn kein serverseitig gefetchtes Buch vorhanden ist, suchen wir das Buch in den Buchdaten aus dem DataContext
    if (!serverBook) {
      const index = bookData.findIndex((b) => b.slug === router.query.slug);
      setBook(bookData[index]);
    }
  }, [bookData, router.query.slug, serverBook]);

  // Zeige einen Ladezustand an, wenn das Buch noch nicht vorhanden ist
  if (!book) {
    return <div>Loading...</div>;
  }

  function getSummaryBySlug(slug) {
    // Suche das Buch in der Buchliste anhand des Slugs
    const book = bookData.find((book) => book.slug === slug);

    if (!book) {
      // Buch wurde nicht gefunden
      return null;
    }

    // Suche den Text in der Textliste anhand der bookID
    const textEntry = summaryData.find((text) => text.bookID === book.bookID);

    if (!textEntry) {
      // Text wurde nicht gefunden
      return null;
    }

    // Gebe den Text zurück
    return (
      <div>
        <h3>Summary:</h3>
        {textEntry.text}
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

  // Die Buchdetails anzeigen
  return (
    <>
      <Background></Background>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.cover}>
          <CoverFromData slug={book.slug} height={300}></CoverFromData>
        </div>
        <div>{getSummaryBySlug(router.query.slug)}</div>
        <div>{renderQuotes()}</div>
        <div>{renderStories()}</div>
      </div>
    </>
  );
}

export default BookDetail;

// Die getServerSideProps-Funktion wird für serverseitiges Rendering verwendet
export async function getServerSideProps(context) {
  // Wenn es sich um eine clientseitige Anfrage handelt, geben wir keine Buchdaten zurück
  if (!context.req) {
    return { props: { serverBook: null } };
  }

  // Bei einer serverseitigen Anfrage holen wir das Buch anhand des Slugs aus den Buchdaten
  const slug = context.params.slug;
  const response = await fetch(`http://localhost:3000//api/books`);
  const bookData = await response.json();
  const index = bookData.findIndex((book) => book.slug === slug);

  // Wenn das Buch nicht gefunden wurde, geben wir einen "notFound"-Status zurück
  if (index === -1) {
    return {
      notFound: true,
    };
  }

  // Ansonsten geben wir das gefundene Buch als serverBook-Prop zurück
  return {
    props: {
      serverBook: bookData[index],
    },
  };
}
