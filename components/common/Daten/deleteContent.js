async function deleteContent(bookID, contentType, contentKey) {
  try {
    const response = await fetch("/api/deleteContent", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookID, contentType, contentKey }),
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

export default deleteContent;
