import { createContext, useContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/books");
      const data = await response.json();
      setBookData(data);
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ bookData, setBookData }}>
      {children}
    </DataContext.Provider>
  );
};
