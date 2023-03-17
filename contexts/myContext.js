/* hier werden alle global states deklariert */
/* in der _app.js wird die componente implementiert */

import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState(false);

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {children}
    </MyContext.Provider>
  );
};
