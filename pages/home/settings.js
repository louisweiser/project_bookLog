import Header from "@/components/common/Heading/HomeNavigation.js";
import TestA from "@/components/test/testA.js";

export default function SettingPage() {
  const addBook = async (bookData) => {
    try {
      const response = await fetch("/api/addbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Buch erfolgreich hinzugefügt:", data.newBook);
      } else {
        console.error("Fehler beim Hinzufügen des Buches:", data.message);
      }
    } catch (error) {
      console.error("Netzwerkfehler beim Hinzufügen des Buches:", error);
    }
  };

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

  async function addNewQuote() {
    const bookID = "6422af07d825c4d705a5dce8";
    const newQuote = {
      text: "Neuer Text",
      page: null,
    };

    try {
      const response = await fetch("/api/addbookquote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookID, newQuote }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Neues Zitat hinzugefügt:", data.data);
      } else {
        console.error("Fehler beim Hinzufügen des Zitats:", data.message);
      }
    } catch (error) {
      console.error("Fehler beim Senden der Anfrage:", error);
    }
  }

  async function addBookContent(bookID, contentType, contentData) {
    try {
      const response = await fetch("/api/addContent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookID,
          contentType,
          contentData,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "An error occurred while adding content."
        );
      }

      const data = await response.json();
      console.log("Content added successfully:", data);
    } catch (error) {
      console.error("Error adding content:", error.message);
    }
  }

  const bookID = "6422af07d825c4d705a5dce8";
  const contentType = "stories";
  const contentData = {
    title: "Neue Geschichte",
    text: "Dies ist eine neue Geschichte.",
    page: null,
  };

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
          addBookContent(bookID, contentType, contentData);
        }}
      >
        ADDDDD
      </button>
      ;
    </>
  );
}
