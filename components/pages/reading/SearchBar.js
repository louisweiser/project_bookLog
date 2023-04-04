import React, { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "@/contexts/myContext.js";

const Background = styled.div`
  background-color: #032330;
  height: 62px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchFieldPassive = styled.div`
  display: flex;
  align-items: center;
  width: calc(100vw - 20px);
  height: 42px;
  border: none;
  border-radius: 5px;
  background-color: #03314b;
`;

const SearchInputField = styled.input`
  width: calc(100vw - 20px);
  height: 37px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background: none;
  outline: none;
  background-color: #03314b;
`;

export default function SearchPage() {
  const { searchTerm, setSearchTerm } = useContext(MyContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <Background>
        <SearchFieldPassive>
          <SearchInputField
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="  search ..."
          />
        </SearchFieldPassive>
      </Background>
    </>
  );
}
