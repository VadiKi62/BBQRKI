export default function workingTimeChecker(
  startTime,
  endTime,
  timeZone = "Europe/Athens"
) {
  // Get the current time in the specified time zone
  const currentTime = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone,
  });
  console.log("currentTime", currentTime);

  const currentTimeStamp = getTimestampInTimeZone(timeZone);

  // Convert start and end times to 24-hour format
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  // Create Date objects for start and end times
  const startDateTime = new Date().setHours(startHour, startMinute, 0, 0);
  let endDateTime = new Date().setHours(endHour, endMinute, 0, 0);

  // If the end hour is less than the start hour, add 1 day to the end time
  if (endHour < startHour) {
    endDateTime = new Date(Date.now() + 86400000).setHours(
      endHour,
      endMinute,
      0,
      0
    );
  }

  // Check if the current time is within the start and end times
  return currentTimeStamp >= startDateTime && currentTimeStamp < endDateTime;
}

function getTimestampInTimeZone(timeZone) {
  const date = new Date().toLocaleString("en-US", { timeZone: timeZone });
  return new Date(date).getTime();
}

function intoDate(unixTimestamp) {
  // Create a new Date object from the Unix timestamp
  const date = new Date(unixTimestamp);

  // You can then access the date and time components
  // console.log("Year:", date.getFullYear()); // Output: 2023
  // console.log("Month:", date.getMonth() + 1); // Output: 3 (Months are zero-indexed)
  // console.log("Day:", date.getDate()); // Output: 16
  // console.log("Hours:", date.getHours()); // Output: 0
  // console.log("Minutes:", date.getMinutes()); // Output: 0
  // console.log("Seconds:", date.getSeconds()); // Output: 0

  // You can also format the date and time as a string
  const formattedDateTime = date.toLocaleString(); // Output: 3/16/2023, 12:00:00 AM (formatted based on your local time zone)
  console.log("Formatted Date and Time:", formattedDateTime);
  return formattedDateTime;
}
