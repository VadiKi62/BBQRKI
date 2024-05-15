import React from "react";
import { scroller } from "react-scroll";
import DefaultButton from "../common/DefaultButton";

function MenuButton() {
  const handleOnClickMenu = () => {
    scroller.scrollTo("menu", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };
  return (
    <div>
      {" "}
      <DefaultButton
        relative={true}
        size="large"
        onClick={handleOnClickMenu}
        minWidth={300}
      >
        To Menu
      </DefaultButton>
    </div>
  );
}

export default MenuButton;
