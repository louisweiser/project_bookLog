import Background from "@/components/common/Background/beige.js";
import SearchPage from "@/components/pages/reading/Search.js";
import FilterComponent from "@/components/pages/reading/Filter.js";
import Render from "@/components/pages/reading/Render.js";
import Navigation from "@/components/common/Navigation";

import styles from "@/styles/pages/reading.module.css";

export default function ReadingPage() {
  return (
    <>
      <Background></Background>
      <div className={styles.container}>
        <SearchPage></SearchPage>
        {/* <FilterComponent></FilterComponent> */}
        <Render></Render>
      </div>
      <Navigation></Navigation>
    </>
  );
}
