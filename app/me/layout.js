// import Head from "next/head";
// import { Fragment } from "react";
// import "@styles/me.css";

// function MyApp({ Component, pageProps }) {
//   return (
//     <Fragment>
//       <Head>
//         <title>Nataliaki - Resume</title>

//         <link
//           href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic"
//           rel="stylesheet"
//         />

//         <link rel="stylesheet" href="css/basic.css" />
//         <link rel="stylesheet" href="css/layout.css" />
//         <link rel="stylesheet" href="css/magnific-popup.css" />
//         <link rel="stylesheet" href="css/animate.css" />
//         <link rel="stylesheet" href="css/jarallax.css" />
//         <link rel="stylesheet" href="css/swiper.css" />
//         <link rel="stylesheet" href="css/fontawesome.css" />
//         <link rel="stylesheet" href="css/brands.css" />
//         <link rel="stylesheet" href="css/solid.css" />
//         <link rel="shortcut icon" href="images/favicons/favicon.ico" />
//       </Head>
//       <Component {...pageProps} />
//     </Fragment>
//   );
// }

// export default MyApp;

// "use client";
// import { Fragment, useEffect } from "react";
// import Footer from "@app/components/Me/Footer";
// import Header from "@app/components/Me/Header";
// import Preloader from "@app/components/Me/Preloader";
// const Layout = ({ children, noHeader }) => {
//   useEffect(() => {
//     cursor();
//   }, []);
//   useEffect(() => {
//     window.addEventListener("scroll", stickyNav);
//   }, []);

//   return (
//     <Fragment>
//       {/* <VideoPopup /> */}
//       {/* <ImageView /> */}
//       {/* <ImageGallery /> */}
//       {/* <ContentModal /> */}
//       <Preloader />
//       {/* Container */}
//       <div className="container">
//         {/* Cursor */}
//         {/* <div className="cursor-follower" /> */}
//         {/* Header */}
//         {!noHeader && <Header />}

//         {/* Wrapper */}
//         <div className="wrapper">
//           {/* Section Started */}
//           {children}
//         </div>
//         {/* Footer */}
//         <Footer />
//         {/* Lines */}
//         <div className="lines">
//           <div className="content">
//             <div className="line-col" />
//             <div className="line-col" />
//             <div className="line-col" />
//             <div className="line-col" />
//             <div className="line-col" />
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };
// export default Layout;
