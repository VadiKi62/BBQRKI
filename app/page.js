import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/bb-qr-code-w.svg"
          alt="BBQ qr code ki"
          width={280}
          height={219}
          priority
        />
      </div>
      <div className={styles.centered}>
        <Link href="/restaurants">RESTAURANTS </Link>
        <Link href="/about">ABOUT </Link>
      </div>
    </main>
  );
}
