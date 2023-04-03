import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import styled from "styled-components";

import CoverFromData from "@/components/common/Cover/BookCover.js";

import { genreData } from "@/public/data/genre.js";
import { DataContext } from "@/contexts/dataContext.js";

const StyledListItem = styled.li`
  margin-right: 10px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 0px 15px;
  font-size: 18px;
`;

const StyledHeadline = styled.h3`
  display: inline-block;
`;

const StyledList = styled.ul`
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
        <StyledListItem key={i}>
          <Link href={`/library/book/${filteredArray[i].slug}`}>
            <CoverFromData
              slug={filteredArray[i].slug}
              height={220}
            ></CoverFromData>
          </Link>
        </StyledListItem>
      );
    }

    return content;
  }

  return genreData.map((item, index) => (
    <div key={index}>
      <Link href={`/library/genre/${item}`}>
        <StyledContainer>
          <StyledHeadline>{item}</StyledHeadline>
        </StyledContainer>
      </Link>
      <StyledList>{isLoading ? <div></div> : render(item)}</StyledList>
    </div>
  ));
}
