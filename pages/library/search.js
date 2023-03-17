import React from "react";
import { useState } from "react";
//import { useContext } from "react";
//import { MyContext } from "@/src/contexts/myContext";
import { useRouter } from "next/router";
import { BackSVG } from "@/public/svgs/headerSVGs";

import { motion } from "framer-motion";

import styles from "./search.module.css";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  //const { myState, setMyState } = useContext(MyContext);

  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const items = ["book1", "book2", "book3", "book4"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <motion.div
      initial={{
        y: -2000,
        zIndex: 1,
      }} /* Startposition und z-Index der neuen Seite */
      animate={{ y: 0 }} /* Endposition der neuen Seite */
      transition={{ duration: 0.8 }} /* Animationsdauer */
      style={{ position: "absolute" }} /* Positionierung der neuen Seite */
    >
      <div className={styles.search}>
        <button onClick={handleBackClick}>
          <BackSVG></BackSVG>
        </button>
        <input
          className={styles.input}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="  search ..."
        />
      </div>
      <ul>
        {filteredItems.length !== 0 ? (
          filteredItems.map((item) => (
            <li key={item}>
              <h2>{item}</h2>
            </li>
          ))
        ) : (
          <h1>add {searchTerm}</h1>
        )}
      </ul>
    </motion.div>
  );
}
