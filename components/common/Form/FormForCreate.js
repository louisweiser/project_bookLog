import { useState, useEffect } from "react";
import React, { useRef } from "react";

import addBook from "@/components/common/Daten/addBook.js";
import createBookContent from "@/components/common/Daten/addBookContent.js";

import { genreData } from "@/public/data/genre.js";

import styles from "./form.module.css";

import { useContext } from "react";
import { DataContext } from "@/contexts/dataContext.js";

export default function FormForCreate() {
  const { bookData, setBookData } = useContext(DataContext);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const [cover, setCover] = useState(null);
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  const [fileValid, setFileValid] = useState(true);
  const fileInputRef = useRef();
  const [dimensions, setDimensions] = useState({ width: null, height: null });

  useEffect(() => {
    async function fetchImageSize() {
      const res = await fetch(`/api/image-size?id=${cover.name}`);
      const data = await res.json();
      setDimensions(data);
    }
    if (cover) {
      fetchImageSize();
    }
  }, [cover]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (fileValid && cover) {
      const reader = new FileReader();
      reader.readAsDataURL(cover);
      reader.onloadend = async () => {
        const base64Data = reader.result;
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cover: base64Data, fileName: cover.name }),
        });

        if (response.ok) {
          console.log("Bilddatei erfolgreich gespeichert.");
        } else {
          console.error("Fehler beim Speichern der Bilddatei.");
        }
      };
    }
    const relativFactor = dimensions.width / dimensions.height;

    const slug =
      title.replace(/\s+/g, "").toLowerCase() +
      subtitle.replace(/\s+/g, "").toLowerCase();

    const newBookData = {
      title: title,
      subtitle: subtitle,
      author: author,
      genre: genre,
      tag: [],
      cover: cover.name,
      coverpath: `/images/cover/${cover.name}}`,
      slug: slug,
      relativefactor: relativFactor,
    };

    addBook(newBookData);
    //createBookContent("6422af07d825c4d705a5dcf1");

    async function fetchBookData() {
      const response = await fetch("/api/get/books");
    }

    fetchBookData();
  };

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
              const file = event.target.files[0];
              const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

              if (
                file &&
                file.size <= 3000000 &&
                allowedTypes.includes(file.type)
              ) {
                setCover(file);
                setFileValid(true);
              } else {
                setFileValid(false);
              }
            }}
          />
          {!fileValid && (
            <p>
              Die Datei ist ungültig. Bitte wählen Sie eine Bilddatei (jpg, png,
              webp) mit einer Größe von maximal 3 MB aus.
            </p>
          )}
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
