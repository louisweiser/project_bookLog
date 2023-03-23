import { useState } from "react";

import { genreData } from "@/public/data/genre.js";

import styles from "./form.module.css";

const GenreCheckbox = ({ genre, checked, onGenreChange }) => {
  const handleCheckboxChange = (event) => {
    onGenreChange(genre, event.target.checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        value={genre}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {genre}
    </label>
  );
};

const GenreDropdown = ({ genres, onGenreChange }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreChange = (genre, checked) => {
    let newSelectedGenres;
    if (checked) {
      newSelectedGenres = [...selectedGenres, genre];
    } else {
      newSelectedGenres = selectedGenres.filter((g) => g !== genre);
    }
    setSelectedGenres(newSelectedGenres);
    onGenreChange(newSelectedGenres);
  };

  return (
    <div>
      {genres.map((genre) => (
        <GenreCheckbox
          key={genre}
          genre={genre}
          checked={selectedGenres.includes(genre)}
          onGenreChange={handleGenreChange}
        />
      ))}
    </div>
  );
};

export default function FormForCreate() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const [image, setImage] = useState("");
  const [genre, setGenre] = useState([]);
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hier können Sie die Daten des Eintrags an den Server senden oder lokal speichern
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        <input
          className={styles.input1}
          placeholder="Title"
          type="text"
          id="title"
          maxLength="50"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="subtitle">
        <input
          className={styles.input1}
          placeholder="Subtitle"
          type="text"
          id="subtitle"
          maxLength="50"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
      </label>
      <label htmlFor="author">
        <input
          className={styles.input1}
          placeholder="Author"
          type="text"
          id="author"
          maxLength="50"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <GenreDropdown genres={genreData} onGenreChange={setGenre} />
      <label htmlFor="genre">
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          multiple
        >
          {genreData.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>
      {/*       <label>
        genre:
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Genre Auswählen</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </label> */}

      <input type="file" onChange={(e) => setImage(e.target.files[0])} />

      <button type="submit">add book</button>
    </form>
  );
}
