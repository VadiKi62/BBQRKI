"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const AboutPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to "/" when the component mounts
    if (typeof window !== "undefined" && router.isReady) {
      router.push("/");
    }
  }, []);

  return null; // This component doesn't render anything
};

export default AboutPage;

// "use client";
// import React from "react";
// //= Page components
// import Loader from "@app/components/common/Loaders/Loader";
// // import Navbar from "@app/components/Common/Navbar";
// import Header from "@app/components/Pres/Header";
// import ShowcaseCircleSide from "@app/components/Pres/ShowcaseCircleSide";
// import ServicesDesc from "@app/components/Pres/ServicesDesc";

// import ShowCase from "@app/components/Pres/ShowCase";
// import Navbar from "@app/components/Pres/NavBarPres";
// import Screenshots from "@app/components/Pres/Screenshots";
// import Process from "@app/components/Pres/Process";

// import Services from "@app/components/Pres/Services";

// import { Suspense } from "react";
// import { unstable_noStore } from "next/cache";
// import CallToAction from "@app/components/Pres/CallToAction";
// import Footer from "@app/components/Pres/Footer";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import bbqrTheme from "@themes/bbqrTheme";
// import { I18nextProvider } from "react-i18next";
// import i from "@locales/i18n";

// export default function HomeAbout() {
//   unstable_noStore();
//   const theme = createTheme(bbqrTheme);
//   return (
//     <Suspense>
//       <I18nextProvider i18n={i}>
//         <ThemeProvider theme={theme}>
//           {/* <Loader /> */}
//           <Navbar />
//           {/* <SliderHeader /> */}
//           <div className="main-content">
//             <Header />
//             <ShowCase />
//             <ServicesDesc />
//             <Services />
//             <Process />
//             {/* <ShowcaseGrid /> */}
//             <ShowcaseCircleSide />

//             {/* <AboutUs /> */}
//             {/* <Works />

//       <MinimalArea2 />
//       <FullTestimonials classText="pb-0" />
//       <Team />
//       <Blogs /> */}
//             <Screenshots />
//             <CallToAction />
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </I18nextProvider>
//     </Suspense>
//   );
// }
