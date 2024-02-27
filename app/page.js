import Image from "next/image";
import Script from "next/script";
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
          width={230}
          height={230}
          priority
        />
      </div>
      <div className={styles.centered}>
        <Link href="/restaurants">RESTAURANTS </Link>
        <Link href="/about">ABOUT </Link>
      </div>
      <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
      {/* <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script> */}
      <Script
        strategy="beforeInteractive"
        src="/js/simpleParallax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script strategy="lazyOnload" src="/js/pace.min.js"></Script>
    </main>
  );
}
