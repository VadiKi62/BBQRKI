import { useEffect, useState } from "react";

export default function useHighSeason(contacts) {
  const [isHighSeason, setIsHighSeason] = useState(false);

  useEffect(() => {
    const { start, end } = contacts.datesBeachSpot;
    const currentDate = new Date();

    // Check if the current date is between start and end dates
    const isInHighSeason = currentDate >= start && currentDate <= end;

    setIsHighSeason(isInHighSeason);
  }, []);

  return isHighSeason;
}
