import { useContext } from "react"; //global state for searching container
import { MyContext } from "@/contexts/myContext.js"; //global state for searching container

import styles from "./search.module.css";

export default function SearchButton() {
  const { myState, setMyState } = useContext(MyContext); //global state for searching container

  const handleOnClick = () => {
    setMyState(true);
  };

  return (
    <button className={styles.container} onClick={handleOnClick}>
      <h5 className={styles.text}>Search ...</h5>
    </button>
  );
}
