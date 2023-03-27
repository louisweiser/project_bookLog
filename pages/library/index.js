//components
import Background from "@/components/common/Background/blue.js";
import SearchPage from "@/components/pages/library/Search.js";
import FilterComponent from "@/components/pages/library/Filter";
import CollectionFromFetch from "@/components/pages/library/CollectionFetch.js";
import CollectionFromData from "@/components/pages/library/CollectionData.js";
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
        <FilterComponent></FilterComponent>
        <CollectionFromData></CollectionFromData>
        {/* <CollectionFromFetch></CollectionFromFetch> */}
      </div>
      <Navigation></Navigation>
    </>
  );
}
