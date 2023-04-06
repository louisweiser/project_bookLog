import createBookContent from "@/components/common/Data/addBookContent.js";

async function addBook(bookData) {
  try {
    const response = await fetch("/api/add/addbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Buch erfolgreich hinzugefügt:", data.newBook);
      createBookContent(data.newBook.bookID);
    } else {
      console.error("Fehler beim Hinzufügen des Buches:", data.message);
    }
  } catch (error) {
    console.error("Netzwerkfehler beim Hinzufügen des Buches:", error);
  }
}

export default addBook;
