"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
	  title: 'Ansh Gujral',
	  description: 'Coming Soon...'
	}
  }

export default function RetroComingSoon() {
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
        </div>
      </main>
    </div>
  );
}
