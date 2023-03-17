import FilterComponent from "@/components/library/Filter";
import Library from "@/components/library/render.js";
import Navigation from "@/components/common/Navigation";

import { useContext } from "react"; //global state for searching container
import { MyContext } from "@/contexts/myContext.js"; //global state for searching container

import { useState } from "react";

import SearchButton from "@/components/common/Button/Search.js";
import SearchPage from "./search";

export default function LibraryPage() {
  const { myState, setMyState } = useContext(MyContext); //global state for searching container
  const handleClick = () => {
    setMyState(true);
  };

  return (
    <>
      <SearchPage></SearchPage>
      <FilterComponent></FilterComponent>
      <Library></Library>
      <Navigation></Navigation>
    </>
  );
}
