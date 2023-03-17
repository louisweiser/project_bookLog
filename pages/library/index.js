import { useContext } from "react"; //global state for searching container
import { MyContext } from "@/contexts/myContext.js"; //global state for searching container

//components
import SearchPage from "../../components/common/Search";
import FilterComponent from "@/components/library/Filter";
import Library from "@/components/library/render.js";
import Navigation from "@/components/common/Navigation";

//main page 2/4
export default function LibraryPage() {
  const { myState, setMyState } = useContext(MyContext); //global state for searching container
  const handleClick = () => {
    setMyState(true);
  };

  return (
    <>
      <SearchPage></SearchPage>
      <FilterComponent></FilterComponent>
      <Library></Library>
      <Navigation></Navigation>
    </>
  );
}
