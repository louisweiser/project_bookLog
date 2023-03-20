import Background from "@/components/common/Background/index.js";
import SearchPage from "../../components/common/Search";
import FilterComponent from "@/components/pages/library/Filter";
import TextField from "@/components/pages/reading/TextField.js";
import Navigation from "@/components/common/Navigation";

import styles from "@/styles/pages/reading.module.css";

export default function ReadingPage() {
  let content = [];
  for (let i = 0; i < 5; i++) {
    content.push(
      <div key={i}>
        <TextField></TextField>
      </div>
    );
  }
  return (
    <>
      <Background></Background>
      <div className={styles.container}>
        <SearchPage></SearchPage>
        <FilterComponent></FilterComponent>
        <TextField></TextField>
        {content}
      </div>

      <Navigation></Navigation>
    </>
  );
}
