import React, { useState } from "react";
import MenuItemComponent from "./MenuItemComponent";
import ModalMenuItem from "./ModalMenuItem"; // Import the ModalMenuItem component

const ClickableMenuItem = ({ item, menu, isSmallScreen }) => {
  const handleDialogContentClick = (event) => {
    // Stops the click event from propagating up to other elements
    event.stopPropagation();
    onClose();
  };
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
          menu={menu}
          isSmallScreen={isSmallScreen}
        />
      </div>
      {isOpen && (
        <ModalMenuItem menu={menu} item={item} onClose={handleClose} />
      )}
    </>
  );
};

export default ClickableMenuItem;
