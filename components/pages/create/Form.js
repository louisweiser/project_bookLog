import React, { useState } from "react";

import styles from "./form.module.css";

export default function Form() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
  };

  const handleInput1Change = (event) => {
    const currentInput1 = event.target.value;
    setInput1(currentInput1);
    console.log("Aktueller Input 1:", currentInput1);
  };

  const handleInput2Change = (event) => {
    const currentInput2 = event.target.value;
    setInput2(currentInput2);
    console.log("Aktueller Input 2:", currentInput2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.label}>
        <label htmlFor="input1"></label>
        <input
          className={styles.input1}
          type="text"
          id="input1"
          value={input1}
          onChange={handleInput1Change}
          maxLength="50"
        />
        <label htmlFor="input2"></label>
        <textarea
          className={styles.input2}
          type="text"
          id="input2"
          value={input2}
          onChange={handleInput2Change}
        />
      </div>
      <button type="submit">Absenden</button>
    </form>
  );
}
