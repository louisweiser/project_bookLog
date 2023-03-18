//components
import SearchPage from "../../components/common/Search";
import FilterComponent from "@/components/library/Filter";
import Library from "@/components/library/render.js";
import Navigation from "@/components/common/Navigation";
import Background from "@/components/home/Background.js";

import styles from "@/styles/pages/library.module.css";

//main page 2/4
export default function LibraryPage() {
  return (
    <>
      <Background></Background>
      <div className={styles.container}>
        <SearchPage></SearchPage>
        <FilterComponent></FilterComponent>
        <Library></Library>
      </div>
      <Navigation></Navigation>
    </>
  );
}
