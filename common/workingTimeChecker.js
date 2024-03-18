export default function workingTimeChecker(
  startTime,
  endTime,
  timeZone = "Europe/Athens"
) {
  // Get the current time in the specified time zone
  timeZone = "America/New_York";
  const currentTime = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone,
  });
  const currentTimeStamp = getTimestampInTimeZone(timeZone);

  // Convert start and end times to 24-hour format
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  // Create Date objects for start and end times
  const startDateTime = new Date().setHours(startHour, startMinute, 0, 0);
  const endDateTime = new Date().setHours(endHour, endMinute, 0, 0);

  // Check if the current time is within the start and end times
  return currentTimeStamp >= startDateTime && currentTimeStamp < endDateTime;
}

function getTimestampInTimeZone(timeZone) {
  const date = new Date().toLocaleString("en-US", { timeZone: timeZone });
  return new Date(date).getTime();
}
