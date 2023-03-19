//components
import Background from "@/components/pages/home/Background.js";
import SearchPage from "../../components/common/Search";
import FilterComponent from "@/components/pages/library/Filter";
import Navigation from "@/components/common/Navigation";
import CollectionFromFetch from "@/components/pages/library/collectionFetch.js";
import CollectionFromData from "@/components/pages/library/collectionData.js";

import styles from "@/styles/pages/library.module.css";

//main page 2/4
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
