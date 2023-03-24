import { useState } from "react";
import React, { useRef } from "react";

import { genreData } from "@/public/data/genre.js";

import styles from "./form.module.css";

export default function FormForCreate() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const [cover, setCover] = useState(null);
  const [genre, setGenre] = useState([]);
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hier können Sie die Daten des Eintrags an den Server senden oder lokal speichern
  };

  const fileInputRef = useRef();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <label htmlFor="genre">
        <select
          className={styles.input1}
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Choose Genre</option>
          {genreData.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="cover">
        <div className={styles.input1}>
          <input
            className={styles.inputfile}
            type="file"
            ref={fileInputRef}
            onChange={(event) => {
              console.log(event);
              const file = event.target.files[0];
              if (setCover(file)) {
                setCover(file);
                console.log(cover);
              }
            }}
          />
          <button
            type="button"
            className={styles.fileButton}
            onClick={() => {
              fileInputRef.current.click();
            }}
          >
            {cover ? cover.name : "Import Cover"}
          </button>
        </div>
      </label>

      <button className={styles.submitButton} type="submit">
        add book
      </button>
    </form>
  );
}
