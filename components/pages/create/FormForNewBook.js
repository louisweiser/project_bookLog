import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import addBook from "@/components/common/Data/addBook.js";
import { genreData } from "@/public/data/genre.js";

const sharedStyles = css`
  display: block;
  text-align: center;
  width: calc(100vw - 10px);
  margin: 10px 5px 0px 5px;
  padding: 7px;
  background-color: #03314b;
  border: none;
  border-bottom: solid 1px #fffefb;
  outline: none;
`;

const StyledContainer = styled.div`
  ${sharedStyles}
`;

const Input = styled.input`
  ${sharedStyles}
`;

const Select = styled.select`
  ${sharedStyles}
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputFile = styled.input`
  display: none;
`;

const FileButton = styled.button`
  width: 100%;
`;

const SubmitButton = styled.button`
  display: block;
  text-align: center;
  width: calc(100vw - 10px);
  margin: 30px 5px 0px 5px;
  padding: 7px;
  background-color: #03314b;
  border: none;
  border: solid 1px #fffefb;
  outline: none;
  &:hover {
    background-color: black;
  }
`;
export default function FormForNewBook() {
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

    async function fetchBookData() {
      const response = await fetch("/api/get/books");
    }

    fetchBookData();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="title">
        <Input
          placeholder="Title"
          type="text"
          id="title"
          maxLength="50"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label htmlFor="subtitle">
        <Input
          placeholder="Subtitle"
          type="text"
          id="subtitle"
          maxLength="50"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
      </label>
      <label htmlFor="author">
        <Input
          placeholder="Author"
          type="text"
          id="author"
          maxLength="50"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </label>
      <label htmlFor="genre">
        <Select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        >
          <option value="">Choose Genre</option>
          {genreData.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </Select>
      </label>
      <label htmlFor="cover">
        <StyledContainer>
          <InputFile
            type="file"
            ref={fileInputRef}
            required
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
              Die Datei ist ungültig. Bitte wähle eine Bilddatei (jpg, png,
              webp) mit einer Größe von maximal 3 MB.
            </p>
          )}
          <FileButton
            type="button"
            onClick={() => {
              fileInputRef.current.click();
            }}
          >
            {cover ? cover.name : "Import Cover"}
          </FileButton>
        </StyledContainer>
      </label>

      <SubmitButton type="submit">add book</SubmitButton>
    </StyledForm>
  );
}
