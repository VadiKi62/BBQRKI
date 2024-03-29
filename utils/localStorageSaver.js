"use client";

export const saveErrorToLocalStorage = (key, errorDescription) => {
  const errorData = {
    timestamp: new Date().toISOString(),
    description: errorDescription,
  };
  localStorage.setItem(key, JSON.stringify(errorData));
};
