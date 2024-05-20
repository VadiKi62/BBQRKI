import React, { useState } from "react";
import MenuItemComponent from "./MenuItemComponent";
import ModalMenuItem from "./ModalMenuItem"; // Import the ModalMenuItem component

const ClickableMenuItem = ({ item, menu, isSmallScreen }) => {
  const englishItem = menu
    .find((langObj) => langObj.langKey === "en")
    ?.items.find((menuItem) => menuItem.menuNumber === item.menuNumber);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={handleClick}>
        <MenuItemComponent
          item={item}
          isSmallScreen={isSmallScreen}
          englishItem={englishItem}
        />
      </div>
      {isOpen && (
        <ModalMenuItem
          item={item}
          onClose={handleClose}
          englishItem={englishItem}
        />
      )}
    </>
  );
};

export default ClickableMenuItem;
