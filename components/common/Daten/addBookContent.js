function createBookContent(bookID) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/api/add/addbookcontent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookID }),
      });

      const data = await response.json();
      if (response.ok) {
        resolve(data);
      } else {
        reject(data.message);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export default createBookContent;
