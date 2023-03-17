import FilterComponent from "@/components/library/Filter";
import Library from "@/components/library/render.js";
import Navigation from "@/components/common/Navigation";

import SearchButton from "@/components/common/Button/Search.js";

export default function LibraryPage() {
  return (
    <>
      <SearchButton link={"/library/search"}></SearchButton>
      <FilterComponent></FilterComponent>
      <Library></Library>
      <Navigation></Navigation>
    </>
  );
}
