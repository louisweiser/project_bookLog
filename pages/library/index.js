import Header from "@/components/Header";
import BookCover from "@/components/Library/Cover";
import FilterComponent from "@/components/Library/Filter";
import Navigation from "@/components/Navigation";
import SearchComponent from "@/components/Search";

import styles from "@/styles/pages/library.module.css";

export default function LibraryPage() {
  return (
    <>
      <Header title="Library"></Header>
      <SearchComponent></SearchComponent>
      <FilterComponent></FilterComponent>
      <div className={styles.div}>
        <BookCover></BookCover>
        <BookCover></BookCover>
        <BookCover></BookCover>
        <BookCover></BookCover>
        <BookCover></BookCover>
        <BookCover></BookCover>
        <BookCover></BookCover>
      </div>
      <Navigation></Navigation>
    </>
  );
}
