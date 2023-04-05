/* hier werden alle global states deklariert */
/* in der _app.js wird die componente implementiert */

import { createContext, useState } from "react";
import { useEffect } from "react";
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  const [currentbook, setCurrentbook] = useState("dieunendlichegeschichte");
  const [theme, setTheme] = useState("quotes");
  const [chooseCurrentBook, setChooseCurrentBook] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    function handleResize() {
      setScreenWidth(Math.floor(window.innerWidth));
    }

    window.addEventListener("resize", handleResize); //bei Änderungen der Bildschirmgröße soll die Breite neu ermittelt werden

    setScreenWidth(window.innerWidth); // Initialisiere die aktuelle Bildschirmgröße

    return () => {
      window.removeEventListener("resize", handleResize);
    }; // Entferne den Event-Listener, wenn die Komponente unmountet wird
  }, []);

  return (
    <MyContext.Provider
      value={{
        screenWidth,
        setScreenWidth,
        input1,
        setInput1,
        input2,
        setInput2,
        input3,
        setInput3,
        currentbook,
        setCurrentbook,
        theme,
        setTheme,
        chooseCurrentBook,
        setChooseCurrentBook,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
/* ---------------- implementation ----------------
import { useContext } from "react";
import { MyContext } from "@/contexts/myContext.js";

const { searchTerm, setSearchTerm } = useContext(MyContext);

*/
