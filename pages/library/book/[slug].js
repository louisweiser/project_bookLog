import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/contexts/dataContext.js";
import Background from "@/components/common/Background/blue.js";
import Header from "@/components/common/Heading/Detail.js";
import CoverFromData from "@/components/common/Cover/coverData.js";
import styles from "./slug.module.css";

function BookDetail({ serverBook }) {
  const router = useRouter();
  const { bookData } = useContext(DataContext);
  const [book, setBook] = useState(serverBook);

  useEffect(() => {
    if (!serverBook) {
      const index = bookData.findIndex((b) => b.slug === router.query.slug);
      setBook(bookData[index]);
    }
  }, [bookData, router.query.slug, serverBook]);

  if (!book) {
    return <div>Loading...</div>;
  }

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

// getServerSideProps
export async function getServerSideProps(context) {
  if (!context.req) {
    // Wenn es eine clientseitige Anfrage ist, wird kein Buch übergeben
    return { props: { serverBook: null } };
  }

  const slug = context.params.slug;
  const response = await fetch(`http://localhost:3000/api/books`);
  const bookData = await response.json();

  const index = bookData.findIndex((book) => book.slug === slug);

  if (index === -1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      serverBook: bookData[index],
    },
  };
}
