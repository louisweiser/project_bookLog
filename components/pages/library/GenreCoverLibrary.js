import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import CoverFromData from "@/components/common/Cover/BookCover.js";

import { DataContext } from "@/contexts/dataContext.js";
import { MyContext } from "@/contexts/myContext.js";

const StyledList = styled.ul`
  display: flex;
  padding: 7.5px;
  width: 100vw;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-between;
`;

export default function GenreCoverLibrary() {
  const router = useRouter();
  const { slug } = router.query;

  const { bookData } = useContext(DataContext);
  const { screenWidth } = useContext(MyContext);

  function filterBooksByGenre(genre) {
    const bookbygenre = bookData.filter((book) => book.genre === genre);

    return bookbygenre;
  }

  function calculateHeights(booksArray) {
    if (!booksArray) {
      return;
    }

    const relativeFactors = booksArray.map((book) => book.relativefactor);

    const heightArray = [];

    for (let i = 0; i < relativeFactors.length; i += 2) {
      if (i + 1 < relativeFactors.length) {
        let height = Math.floor(
          (screenWidth - 20) / (relativeFactors[i] + relativeFactors[i + 1])
        );
        if (height < 0) {
          height = 0;
        } //error handling
        heightArray.push(height);
        heightArray.push(height);
      } else {
        let height = Math.floor((screenWidth - 20) / 2 / relativeFactors[i]);
        if (height < 0) {
          height = 0;
        } //error handling
        heightArray.push(height);
      }
    }
    return heightArray;
  }

  function renderCover() {
    const renderedCover = Object.values(allBooksByGenre).map((book, index) => {
      return (
        <div key={index}>
          <Link href={`/library/book/${book.slug}`}>
            <CoverFromData
              slug={book.slug}
              height={heightArray[index]}
            ></CoverFromData>
          </Link>
        </div>
      );
    });
    return renderedCover;
  }

  const allBooksByGenre = filterBooksByGenre(slug);
  const heightArray = calculateHeights(allBooksByGenre);

  return <StyledList>{renderCover()}</StyledList>;
}
