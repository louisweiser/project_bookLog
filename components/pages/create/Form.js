import React, { useState } from "react";
import { useContext } from "react"; //global state for
import { MyContext } from "@/contexts/myContext.js"; //global state for
import { DataContext } from "@/contexts/dataContext.js";

import addBookContent from "@/components/common/Daten/addContent.js";

import CoverFromData from "@/components/common/Cover/coverData.js";

import styles from "./form.module.css";

export default function Form() {
  const { input1, setInput1 } = useContext(MyContext); //global state for
  const { input2, setInput2 } = useContext(MyContext); //global state for
  const { input3, setInput3 } = useContext(MyContext); //global state for
  const { currentbook } = useContext(MyContext); //global state for
  const { theme } = useContext(MyContext);
  const { bookData } = useContext(DataContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input1.trim() === "" && input2.trim() === "") {
      console.log("please enter value");
      return;
    }

    const contentDataObject = {
      title: input1,
      text: input2,
      page: input3,
    };
    function findBookBySlug(slug) {
      return bookData.find((book) => book.slug === slug);
    }
    const currentbookObject = findBookBySlug(currentbook);

    addBookContent(currentbookObject.bookID, theme, contentDataObject);

    setInput1("");
    setInput2("");
    setInput3("");
  };

  const handleInput1Change = (event) => {
    const currentInput1 = event.target.value;
    setInput1(currentInput1);
  };

  const handleInput2Change = (event) => {
    const currentInput2 = event.target.value;
    setInput2(currentInput2);
  };

  const handleInput3Change = (event) => {
    const currentInput3 = event.target.value;
    setInput3(currentInput3);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.label}>
        <label htmlFor="input1"></label>
        <input
          className={styles.input1}
          placeholder="Headline"
          type="text"
          id="input1"
          value={input1}
          onChange={handleInput1Change}
          maxLength="50"
        />
        <label htmlFor="input2"></label>
        <textarea
          className={styles.input2}
          placeholder="Enter text here"
          type="text"
          id="input2"
          value={input2}
          onChange={handleInput2Change}
        />
        <div>
          <label htmlFor="input3"></label>
          <input
            className={styles.input3}
            placeholder="Page"
            type="number"
            id="input3"
            value={input3}
            onChange={handleInput3Change}
          />
        </div>
      </div>
      <div className={styles.submitbuttoncontainer}>
        <button type="submit" className={styles.submitbutton}>
          <CoverFromData slug={currentbook} height={120}></CoverFromData>
        </button>
      </div>
    </form>
  );
}
