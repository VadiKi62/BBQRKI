import { useEffect, useState } from "react";
import { useMainContext } from "@app/restaurants/Context";
import { useTranslation } from "react-i18next";
import { sendWaiter, sendBill } from "@utils/BotRequest";
import { getLongLanguageName, handleButtonSpecificLogic } from "@utils/index";

const useCallWaiterAndBill = ( currentPosition, radius, isGeolocationAvailable) => {
  const {
    isButtonBillActive,
    isWaiterButtonActive,
    setButtonBillActive,
    setShowInitialHeader,
    setCountdownWaiter,
    setCountdownBill,
    countTimer,
    showModal,
    hideModal,
    confirmAction,
    lang, zont
  } = useMainContext();
  const ms = 1600;
  const delay = () => new Promise((resolve) => setTimeout(resolve, ms));  
  const { t } = useTranslation();

  const language = getLongLanguageName(lang);
  const messageRun = t("alert.run");
  const messageOops = t("alert.oops");
  const messageGot = t("alert.got");
  const messageInside = t("alert.inside");
  const messageElse = t("alert.else");
  const messageEnable = t("alert.enableLoc");


  const messageWaiter1 = `Table ${zont} called the Waiter.  Language - ${language}.\nΤραπέζι ${zont} κάλεσε τον σερβιτόρο. Γλώσσα - ${language}. `;
  let messageBill1 = `Table ${zont} asks for Bill. Language - ${language}.\nΤραπέζι ${zont} ζητά τον λογαριασμό.  Γλώσσα - ${language}. `

  const performActionBill = async (action) => {
    try {
      handleButtonSpecificLogic(
        setButtonBillActive,
        setCountdownBill,
        countTimer,
        "Bill"
      );
      await action();
      hideModal();
      showModal(messageGot);
    } catch (error) {
      alert(
        `${messageOops}.Error in performActionBill: ${JSON.stringify(error)}`
      );
    }
  };
  const performActionWaiter = async (action) => {
    try {
      handleButtonSpecificLogic(
        setWaiterButtonActive,
        setCountdownWaiter,
        countTimer,
        "Waiter"
      );
      await action();
      // Hide loading spinner and update modal content
      hideModal();
      showModal(messageGot, false, true);
    } catch (error) {
      showModal(
        `${messageOops}.Error in performActionBill: ${JSON.stringify(error)}`
      );
    }
  };
  const handleCallWaiter = async () => {
    await delay();
    if (isGeolocationAvailable) {
      if (isWaiterButtonActive) {
        if (!isButtonBillActive && !confirmAction(messageElse)) {
          return;
        }
        if (
          currentPosition.distanceToRest <=
          Number(radius) + currentPosition.accuracy
        ) {
          performActionWaiter(() => {
            sendWaiter(rest, messageWaiter1, zont, messageOops, messageGot);
          });
        } else {
          showModal(`${messageInside}`);
          if (history && location) {
            history.replaceState({}, document.title, location.pathname);
          }
          setShowInitialHeader(false);
        }
      } else {
        showModal(messageRun, false, true);
      }
    } else {
      // Handle case where geolocation was rejected
      showModal(messageEnable);
    }
  };
  const handleCallBill = async () => {
    await delay();
    if (isGeolocationAvailable) {
      if (isButtonBillActive) {
        if (!isWaiterButtonActive) {
          showModal(messageRun, false, true);
          return;
        }

        if (
          currentPosition.distanceToRest <=
          Number(radius) + currentPosition.accuracy
        ) {
          const paymentWithCash = window.confirm(t("bill.payment"));
          // Determine the payment method based on the user's choice
          const paymentMethod = paymentWithCash ? "Cash" : "Card";
          // Include the payment method in the message
          messageBill1 = `${rest.name}.Table ${zont} asks for Bill. Payment Method: ${paymentMethod}. Language - ${language}.\nΤραπέζι ${zont} ζητά τον λογαριασμό. Τρόπος Πληρωμής:${paymentMethod}. Γλώσσα - ${language}.`;
          performActionBill(() => {
            sendBill(rest, messageBill1, zont, messageOops, messageGot);
          });
        } else {
          showModal(`${messageInside}`);
          if (history && location) {
            history.replaceState({}, document.title, location.pathname);
          }
          setShowInitialHeader(false);
        }
      } else {
        showModal(messageRun, false, true);
      }
    } else {
      // Handle case where geolocation was rejected
      showModal(messageEnable);
    }
  };


  return {
    handleCallWaiter,
    handleCallBill,
  };
};

export default useCallWaiterAndBill;
