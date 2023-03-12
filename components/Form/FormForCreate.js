import { useState } from "react";

export default function FormForCreate() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hier können Sie die Daten des Eintrags an den Server senden oder lokal speichern
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        cover:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <br />
      <label>
        author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <br />
      <label>
        genre:
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Bitte auswählen</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </label>
      <br />
      <button type="submit">add book</button>
    </form>
  );
}
