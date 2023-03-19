import styles from "./dictonary.module.css";

const dictonaryData = {
  word: "erklärung",
  word2: "erklärung",
  word3: "erklärung",
  word4: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  word5: "erklärung",
  word6: "erklärung",
};

export default function Dictonary() {
  const data = dictonaryData;
  return (
    <table>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td className={styles.table1}>{key}</td>
            <td className={styles.table2}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}