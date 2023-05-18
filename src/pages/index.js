import Head from "next/head";
import { nunito } from "../../Util/Font";
import styles from "@/styles/Home.module.css";
import FirstQuote from "../../component/FirstQuote/FirstQuote";
export default function Home() {
  return (
    <>
      <Head>
        <title>Channel Blog - Enhance Your Knowledge</title>
        <meta
          name="description"
          content="Read , Learn and Know about latest things happening around you"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${nunito.className}`}>
        <FirstQuote nunito={nunito} />
      </main>
    </>
  );
}
