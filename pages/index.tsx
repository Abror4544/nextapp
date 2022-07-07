import type { NextPage } from "next";
import Head from "next/head";
import Heading from "../components/Heading/Heading";
import Socials from "../components/Socials/Socials";
import styles from "../styles/Home.module.scss";
import axios from "axios";

export const getStaticProps = async () => {
  try {
    const result = await axios.get(`${process.env.API_HOST}/socials`);
    const data = result.data;

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        socials: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const Home: NextPage = ({ socials }: any) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next.js Application" />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;
