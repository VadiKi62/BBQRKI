"use client";
import React, { useRef, useEffect, useState } from "react";
import Button from "@app/components/common/Button";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

export function CallWaiterButton({
  showCallWaiterButton,
  isSticky,
  isWaiterButtonActive,
  handleCallWaiter,
}) {
  // const { isWaiterButtonActive, handleCallWaiter } = useMyContext();
  const { t } = useTranslation();
  return (
    <Element name="callWaiterButton">
      <Button
        // bottom={0}
        isSticky={isSticky}
        disabled={!isWaiterButtonActive}
        visibility={showCallWaiterButton}
        onClick={handleCallWaiter}
        blinking={true}
        label={isWaiterButtonActive ? `${t("menu.call1")}` : `${t("menu.run")}`}
      />
    </Element>
  );
}

export function CallBillButton({
  showCallWaiterButton,
  isSticky,
  isButtonBillActive,
  handleCallBill,
}) {
  const { t } = useTranslation();

  return (
    <Element name="callBillButton">
      <Button
        // bottom={0}

        // isSticky={isSticky}
        disabled={!isButtonBillActive}
        visibility={showCallWaiterButton}
        onClick={handleCallBill}
        label={isButtonBillActive ? `${t("menu.call2")}` : `${t("menu.run")}`}
      />
    </Element>
  );
}

export function CallCustomButton({ showButton, handleCall, label }) {
  const { t } = useTranslation();

  return (
    <Element name="callCustomButton">
      <Button
        // bottom={0}
        // isSticky={isSticky}
        disabled={false}
        visibility={showButton}
        onClick={handleCall}
        label={label}
      />
    </Element>
  );
}
