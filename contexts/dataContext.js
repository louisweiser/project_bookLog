import { createContext, useContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const useBooks = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [storyData, setStoryData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);
  const [quoteData, setQuoteData] = useState([]);
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    async function fetchBookData() {
      const response = await fetch("/api/books");
      const data = await response.json();
      setBookData(data);
    }
    async function fetchStoryData() {
      const response = await fetch("/api/bookstory");
      const data = await response.json();
      setStoryData(data);
    }
    async function fetchSummaryData() {
      const response = await fetch("/api/booksummary");
      const data = await response.json();
      setSummaryData(data);
    }
    async function fetchQuoteData() {
      const response = await fetch("/api/bookquote");
      const data = await response.json();
      setQuoteData(data);
    }
    async function fetchContentData() {
      const response = await fetch("/api/bookcontent");
      const data = await response.json();
      setContentData(data);
    }

    fetchBookData();
    fetchStoryData();
    fetchSummaryData();
    fetchQuoteData();
    fetchContentData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        bookData,
        setBookData,
        storyData,
        setStoryData,
        summaryData,
        setSummaryData,
        quoteData,
        setQuoteData,
        contentData,
        setContentData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

/* ---------------- implementation ----------------
import { useContext } from "react";
import { DataContext } from "@/contexts/dataContext.js";

const { bookData } = useContext(DataContext);

*/
