import React from "react";
import HeroLayout from "./Hero/HeroLayout";

function MainContent({ rest }) {
  return (
    <div>
      <HeroLayout rest={rest} />
    </div>
  );
}

export default MainContent;
