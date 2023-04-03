import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import styled from "styled-components";

import CoverFromData from "@/components/common/Cover/coverData.js";
import { genreData } from "@/public/data/genre.js";
import { DataContext } from "@/contexts/dataContext.js";

const BookItem = styled.li`
  margin-right: 10px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 0px 15px;
  font-size: 18px;
`;

const CategoryText = styled.h3`
  display: inline-block;
`;

const Collection = styled.ul`
  display: flex;
  list-style: none;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 7px 0;
  margin-left: 10px;
`;

export default function BookLibrary() {
  const { bookData } = useContext(DataContext); //Metadaten
  const [isLoading, setIsLoading] = useState(true); //Fehlerbehandlung

  const FilterData = (array, key, value) => {
    return array.filter((item) => item[key] === value);
  };

  useEffect(() => {
    if (bookData && bookData.length > 0) {
      setIsLoading(false);
    }
  }, [bookData]); //Fehlerbehandlung: sicherstellen dass die daten vorhanden sind beim laden durch die url

  function render(filter) {
    const filteredArray = FilterData(bookData, "genre", filter);
    let content = [];
    for (let i = 0; i < filteredArray.length; i++) {
      content.push(
        <BookItem key={i}>
          <Link href={`/library/book/${filteredArray[i].slug}`}>
            <CoverFromData
              slug={filteredArray[i].slug}
              height={220}
            ></CoverFromData>
          </Link>
        </BookItem>
      );
    }

    return content;
  }

  return genreData.map((item, index) => (
    <div key={index}>
      <Link href={`/library/genre/${item}`}>
        <Category>
          <CategoryText>{item}</CategoryText>
        </Category>
      </Link>
      <Collection>{isLoading ? <div></div> : render(item)}</Collection>
    </div>
  ));
}
