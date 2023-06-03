import "@/styles/globals.scss";
import { nunito } from "../../Util/Font";

export default function App({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  );
}
