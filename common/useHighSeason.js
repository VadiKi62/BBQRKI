import { useEffect, useState } from "react";

export default function useHighSeason(contacts) {
  const [isHighSeason, setIsHighSeason] = useState(true);

  useEffect(() => {
    const { start, end } = contacts.datesBeachSpot;
    const currentDate = new Date();

    // Extract month and date parts from the current date
    const currentMonthDate = formatDate(currentDate);

    // Extract month and date parts from the start and end dates
    //03-01
    const startMonthDate = formatDate(new Date(start));

    //10-30
    const endMonthDate = formatDate(new Date(end));

    const isInHighSeason =
      currentMonthDate >= startMonthDate && currentMonthDate <= endMonthDate;
    setIsHighSeason(isInHighSeason);
  }, []);

  return isHighSeason;
}

function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}-${day}`;
}
