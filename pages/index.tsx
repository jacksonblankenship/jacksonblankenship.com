import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>coming soon...</title>
        <meta
          name="description"
          content="Jackson Blankenship's personal website"
        />
        <link rel="icon" href="/logo-light.svg" />
      </Head>
      <main className={styles.main}>
        <div>
          <Image src="/logo-light.svg" alt="logo" width={120} height={120} />
        </div>
        <h1 className={styles.title}>
          personal projects take time.
          <br />
          we’ll be live soon.
        </h1>
        <div className={styles.social}>
          <a
            href="https://twitter.com/env_jackson"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src="/twitter.svg" alt="logo" width={24} height={24} />
          </a>
          <a
            href="https://github.com/jacksonblankenship"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src="/github.svg" alt="logo" width={24} height={24} />
          </a>
          <a
            href="https://linkedin.com/in/jacksonblankenship"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src="/linkedin.svg" alt="logo" width={24} height={24} />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
