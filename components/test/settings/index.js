import Header from "@/components/common/Heading/HomeNavigation.js";
import TestA from "@/components/test/testA.js";

import addBook from "@/components/common/Data/addBook.js";
import addBookContent from "@/components/common/Data/addContent.js";
import deleteContent from "@/components/common/Data/deleteContent.js";
import updateContent from "@/components/common/Data/updateContent.js";

import { useContext } from "react";
import { DataContext } from "@/contexts/dataContext.js";

export default function SettingPage() {
  const { contentData } = useContext(DataContext);
  console.log(contentData);

  // Beispiel für die Verwendung der addBook-Funktion
  const newBookData = {
    title: "Beispielbuch",
    subtitle: "Ein Beispiel-Untertitel",
    author: "Max Mustermann",
    genre: "Roman",
    tag: ["Beispiel", "Test"],
    cover: "https://example.com/cover.jpg",
    coverpath: "/covers/example-cover.jpg",
    slug: "beispielbuch",
    relativefactor: 1,
    bookID: "6422af07d825c4d705a5dcf1",
  };

  // Beispiel für die Verwendung der addContentBook-Funktion
  const bookID = "6422af07d825c4d705a5dce8";
  const contentType = "stories";
  const contentDataTest = {
    title: "Neue Geschichte",
    text: "Dies ist eine neue Geschichte.",
    page: null,
  };

  // Beispiel für die Verwendung der DeleteContentBook-Funktion
  const contentKey = "4";

  // Beispiel für die Verwendung der UpdateContentBook-Funktion

  const contentKeyUp = "1";
  const contentDataNew = { title: "New Title", text: "New Text", page: 10 };

  return (
    <>
      <Header title="Settings"></Header>
      <TestA></TestA>
      <br />
      <br />
      <button
        onClick={() => {
          addBook(newBookData);
        }}
      >
        add to database
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          addBookContent(bookID, contentType, contentDataTest);
        }}
      >
        ADDDDD
      </button>
      <button
        onClick={() => {
          deleteContent(bookID, contentType, contentKey)
            .then((bookContent) => {
              console.log("Content deleted:", bookContent);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        DELETE
      </button>
      <button
        onClick={() => {
          updateContent(bookID, contentType, contentKeyUp, contentDataNew)
            .then((bookContent) => {
              console.log("Content updated:", bookContent);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        UPDATE
      </button>
      ;
    </>
  );
}
