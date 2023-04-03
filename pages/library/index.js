//components
import Background from "@/components/common/Background/blue.js";
import SearchPage from "@/components/pages/library/SearchBar.js";
import FilterComponent from "@/components/pages/library/FilterBar";
import BookLibrary from "@/components/pages/library/BookLibrary.js";
import Navigation from "@/components/common/Navigation";

import styles from "@/styles/pages/library.module.css";

//main page 2/4
//collection kann aus Daten erzeugt werden oder durch einen fetch
export default function LibraryPage() {
  return (
    <>
      <Background></Background>
      <div className={styles.container}>
        <SearchPage></SearchPage>
        {/* <FilterComponent></FilterComponent> */}
        <BookLibrary></BookLibrary>
      </div>
      <Navigation></Navigation>
    </>
  );
}
