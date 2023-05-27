import Head from "next/head";
import { nunito } from "../../Util/Font";
import styles from "@/styles/Home.module.css";
import FirstQuote from "../../component/FirstQuote/FirstQuote";
import Navbar from "../../component/Navbar/Navbar";
import FirstSection from "../../component/FirstSection/FirstSection";
import FirstPart from "../../component/FirstPart/FirstPart";
import SecondPart from "../../component/SecondPart/SecondPart";
import { getSortedPostsData } from "../../lib/post";
import { sortByDate } from "../../Util";
import Categories from "../../component/Categories/Categories";
import Slider from "../../component/Slider/Slider";

export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <>
      <Head>
        <title>Channel Blog - Enhance Your Knowledge</title>
        <meta
          name="description"
          content="Read, Learn and Know about latest things happening around you"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main} ${nunito.className}`}>
        <FirstQuote nunito={nunito} />
        <FirstPart allPostsData={allPostsData} />
        <SecondPart allPostsData={allPostsData} />
        <FirstSection />
        <Categories allPostsData={allPostsData} />
        <Slider />
      </main>
    </>
  );
}

export async function getStaticProps(_context) {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData: allPostsData.sort(sortByDate),
    },
  };
}
