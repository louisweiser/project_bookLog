import { useState, useEffect } from "react";

export default function TestA() {
  const [books, setBooks] = useState({ width: null, height: null });
  useEffect(() => {
    async function fetchImageSize() {
      const res = await fetch(`/api/books`);
      const data = await res.json();
      setBooks(data);
    }

    fetchImageSize();
  });

  const handleOnClick = () => {
    console.log(books);
  };

  return <button onClick={handleOnClick}>testA:</button>;
}
