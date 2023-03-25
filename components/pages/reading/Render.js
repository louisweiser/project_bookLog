import { useContext } from "react"; //global state for searching container rendering

import { MyContext } from "@/contexts/myContext";

import styles from "./render.module.css";

export default function Render() {
  const { renderReading } = useContext(MyContext);

  return (
    <div>
      {renderReading.map((item, index) => (
        <div key={index} className={styles.container}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <p>{item.page}</p>
        </div>
      ))}
    </div>
  );
}
