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

export default addBookContent;

const bookID = "6422af07d825c4d705a5dce8";
const contentType = "stories";
const contentData = {
  title: "Neue Geschichte",
  text: "Dies ist eine neue Geschichte.",
  page: null,
};
