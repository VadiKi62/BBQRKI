"use client";
import React from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import CircleBg from "@app/components/About/CircleBg";
//= Scripts
import LoadingScreen from "@app/components/common/Loaders/Loader";
import ProgressScroll from "@app/components/common/ProgressScroll";
//= Page components
import Loader from "@app/components/common/Loaders/Loader";
import Header from "@app/components/About/Header";
import ShowcaseCircleSide from "@app/components/About/ShowcaseCircleSide";

import ShowCase from "@app/components/About/ShowCase";
import Navbar from "@app/components/About/NavBarPres";
import Screenshots from "@app/components/About/Screenshots";
import Process from "@app/components/About/Process";
import Services from "@app/components/About/Services";

import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import CallToAction from "@app/components/About/CallToAction";
import Footer from "@app/components/About/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import bbqrTheme from "@themes/bbqrTheme";
import { I18nextProvider } from "react-i18next";
import i from "@locales/i18n";

export default function HomeAbout() {
  unstable_noStore();
  const theme = createTheme(bbqrTheme);
  return (
    <main>
      <Suspense>
        <I18nextProvider i18n={i}>
          <ThemeProvider theme={theme}>
            <Navbar />
            <div className="main-content">
              <Header />
              <ShowCase />
              <Services />
              <Process />
              <ShowcaseCircleSide />

              <Screenshots />
              <CallToAction />
              <Footer />
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </Suspense>
      <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/simpleParallax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/pace.min.js"></Script>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main>
//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/bb-qr-code-w.svg"
//           alt="BBQ qr code ki"
//           width={230}
//           height={230}
//           priority
//         />
//       </div>
//       <div className={styles.centered}>
//         <Link className="link-hover-effect" href="/restaurants">
//           RESTAURANTS{" "}
//         </Link>
//         <Link className="link-hover-effect" href="/about">
//           ABOUT PRODUCT
//         </Link>
//         {/* <Link href="https://portfolio-example-lemon.vercel.app/">
//             ABOUT ME{" "}
//           </Link> */}
//       </div>
//       <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
//       <Script
//         strategy="beforeInteractive"
//         src="/js/simpleParallax.min.js"
//       ></Script>
//       <Script
//         strategy="beforeInteractive"
//         src="/js/isotope.pkgd.min.js"
//       ></Script>
//       <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
//       <Script strategy="lazyOnload" src="/js/pace.min.js"></Script>
//     </main>
//   );
// }
