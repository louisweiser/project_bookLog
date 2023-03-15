import "@/styles/globals.css";
import { MyProvider } from "../contexts/myContext.js";

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}
