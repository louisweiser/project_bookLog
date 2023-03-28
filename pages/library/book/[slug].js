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
  const { bookData } = useContext(DataContext);
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

  // Die Buchdetails anzeigen
  return (
    <>
      <Background></Background>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.cover}>
          <CoverFromData slug={book.slug} height={300}></CoverFromData>
        </div>
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
