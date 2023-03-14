import React from "react";
import { useContext } from "react";
import { MyContext } from "@/src/contexts/myContext";

import styles from "@/styles/components/search.module.css";

export default function SearchComponent() {
  //const [searchTerm, setSearchTerm] = useState("");
  const { myState, setMyState } = useContext(MyContext);

  const handleInputChange = (event) => {
    setMyState(event.target.value);
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={myState}
        onChange={handleInputChange}
        placeholder="  search"
      />
      <h1>{myState}</h1>
    </>
  );
}
