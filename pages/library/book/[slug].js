import { useRouter } from "next/router";
import { useContext } from "react";
import Background from "@/components/common/Background/blue.js";
import Header from "@/components/common/Heading/Detail.js";
import CoverFromData from "@/components/common/Cover/coverData.js";
import { DataContext } from "@/contexts/dataContext.js";
import styles from "./slug.module.css";

function BookDetail({ book }) {
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
  const slug = context.params.slug;

  // Lade Buchdaten über die API
  const response = await fetch("http://localhost:3000/api/books");
  const bookData = await response.json();

  const index = bookData.findIndex((book) => book.slug === slug);

  if (index === -1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      book: bookData[index],
    },
  };
}
