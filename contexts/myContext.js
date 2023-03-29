/* hier werden alle global states deklariert */
/* in der _app.js wird die componente implementiert */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const [currentbook, setCurrentbook] = useState("dieunendlichegeschichte");
  const [theme, setTheme] = useState("quotes");
  const [myStateCreate, setMyStateCreate] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MyContext.Provider
      value={{
        myState,
        setMyState,
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
        myStateCreate,
        setMyStateCreate,
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
