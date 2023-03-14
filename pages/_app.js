import "@/styles/globals.css";
import { MyProvider } from "../src/contexts/myContext";

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}
