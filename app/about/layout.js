import Script from "next/script";
//= Scripts
import LoadingScreen from "@app/components/common/Loaders/Loader";
import ProgressScroll from "@app/components/common/ProgressScroll";
//= Page Components
import CircleBg from "@app/components/Pres/CircleBg";
import Header from "@app/components/Pres/Header";
// import Header from "@/components/Demos/Header";
// import MainContent from "@/components/Demos/MainContent";

export const metadata = {
  title: "BBQR Code => Ki => About",
  icons: {
    icon: "/bb.png",
    shortcut: "/favicon.ia",
  },
};

export default function LayoutAbout({ children }) {
  return (
    <>
      {/* <LoadingScreen /> */}
      {/* <ProgressScroll /> */}
      <CircleBg />
      {children}
      {/* 
      <Header />
      <MainContent /> */}
    </>
  );
}
