import SearchPage from "../../components/common/Search";
import FilterComponent from "@/components/library/Filter";
import Navigation from "@/components/common/Navigation";
import Background from "@/components/home/Background.js";

import TextField from "@/components/reading/Text.js";

import styles from "@/styles/pages/reading.module.css";

export default function ReadingPage() {
  let content = [];
  for (let i = 0; i < 5; i++) {
    content.push(<TextField></TextField>);
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
