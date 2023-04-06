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
        console.log(
          "Content zum Buch erfolgreich hinzugefügt. Daten werden geladen...",
          data
        );
        /* async function fetchBookData() {
          const response = await fetch("/api/get/books");
          const data = await response.json();
          setBookData(data);
          if (response.ok) {
            console.log("Buch geladen");
          }
        }
        async function fetchContentData() {
          const response = await fetch("/api/get/bookcontent");
          const data = await response.json();
          setContentData(data);
          if (response.ok) {
            console.log("Content geladen");
          }
        }
        fetchBookData();
        fetchContentData(); */
      } else {
        reject(data.message);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export default createBookContent;
