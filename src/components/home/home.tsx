"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styles from "./home.module.scss";

const Home: FC = () => {
  const [text, setText] = useState("");
  const fullText =
    "> INITIALIZING PORTFOLIO...\n> LOADING MODULES...\n> COMPILING EXPERIENCE...\n> DEBUGGING SKILLS...\n> COMING SOON...";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => {
        if (index < fullText.length) {
          index++;
          return fullText.slice(0, index);
        }
        clearInterval(intervalId);
        return prevText;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.terminal}>
          <pre className={styles.pre}>
            {text}
            <span className={styles.cursor}>_</span>
          </pre>
        </div>

        <h1 className={styles.title}>COMING SOON</h1>
        <p className={styles.description}>
          My cutting-edge software engineering portfolio is currently in
          development. Stay tuned for the launch!
        </p>

        <div className={styles.links}>
          <Link
            href="https://github.com/gujral1997"
            target="_blank"
            rel="noopener noreferrer"
          >
            [GITHUB]
          </Link>
          <Link
            href="https://www.linkedin.com/in/gujral1997"
            target="_blank"
            rel="noopener noreferrer"
          >
            [LINKEDIN]
          </Link>
          <Link
            href="https://x.com/gujral1997"
            target="_blank"
            rel="noopener noreferrer"
          >
            [TWITTER]
          </Link>
          <Link href="mailto:anshgujral1997@gmail.com">[EMAIL]</Link>
          <Link href="https://www.blogologer.com">[BLOGLOGER]</Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
