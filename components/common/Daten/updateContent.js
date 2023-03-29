async function updateContent(bookID, contentType, contentKey, contentData) {
  try {
    const response = await fetch("/api/updateContent", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookID, contentType, contentKey, contentData }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
}

export default updateContent;
