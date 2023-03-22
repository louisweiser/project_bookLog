/* hier werden alle global states deklariert */
/* in der _app.js wird die componente implementiert */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

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
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
/* ---------------- implementation ----------------
import { useContext } from "react"; //global state for
import { MyContext } from "@/contexts/myContext.js"; //global state for

const { var, setVar } = useContext(MyContext); //global state for

*/
