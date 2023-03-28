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

    fetchBookData();
    fetchStoryData();
  }, []);

  return (
    <DataContext.Provider
      value={{ bookData, setBookData, storyData, setStoryData }}
    >
      {children}
    </DataContext.Provider>
  );
};

/* ---------------- implementation ----------------
import { useContext } from "react";
import { DataContext } from "@/contexts/dataContext.js";

const { storyData } = useContext(DataContext);

*/
