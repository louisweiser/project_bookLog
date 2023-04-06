import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { MyContext } from "@/contexts/myContext.js";

const StyledSearchBarContainer = styled.div`
  /*layout*/
  display: flex;
  justify-content: center;
  align-items: center;
  /*dimension*/
  height: 62px;
  width: 100%;
  /*style*/
  background-color: #032330;
`;

const StyledInputFieldContainer = styled.div`
  /*layout*/
  display: flex;
  align-items: center;
  justify-content: center;
  /*dimension*/
  width: calc(100% - 20px);
  height: 42px;
  /*style*/
  border: none;
  border-radius: 5px;
  background-color: #03314b;
`;

const StyledInputField = styled.input`
  /*dimension*/
  width: calc(100% - 40px);
  height: 37px;
  margin: 5px;
  /*style*/
  border: none;
  border-radius: 5px;
  background: none;
  outline: none;
  background-color: #03314b;
`;

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(MyContext);
  const router = useRouter();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setSearchTerm("");
    }; //wenn die Seite verlassen wird soll searchTerm zurückgesetzt werden

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });

  return (
    <StyledSearchBarContainer>
      <StyledInputFieldContainer>
        <StyledInputField
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="  search ..."
        />
      </StyledInputFieldContainer>
    </StyledSearchBarContainer>
  );
}
