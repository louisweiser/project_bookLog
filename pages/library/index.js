import Header from "@/components/Header";
import BookCover from "@/components/Library/Cover";
import FilterBar from "@/components/Library/Filter";
import Navigation from "@/components/Navigation";

import styles from "@/styles/pages/library.module.css";

export default function LibraryPage() {
  return (
    <>
      <Header title="Library"></Header>
      <FilterBar></FilterBar>
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
