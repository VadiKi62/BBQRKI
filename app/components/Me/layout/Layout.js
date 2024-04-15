import { useEffect } from "react";
import { stickyNav } from "../utils";
import Footer from "./Footer";

import Preloader from "./Preloader";
const Layout = ({ children }) => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  }, []);

  return (
    <>
      <Preloader />

      <div className="container">
        <div className="wrapper">{children}</div> <Footer />
        <div className="lines">
          <div className="content">
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
