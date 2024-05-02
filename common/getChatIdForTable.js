export function getChatIdForTable(rest, tableNumber) {
  console.log(rest);
  console.log(tableNumber);
  console.log("map", rest.waiterTableMap);
  // Check if tableChats exists and has entries
  if (rest.waiterTableMap && rest.waiterTableMap.length > 0) {
    // Iterate over each tableChat entry to find the correct range
    for (let chat of rest.waiterTableMap) {
      // Check if the table number is within the tableFrom and tableTill range
      if (tableNumber >= chat.tableFrom && tableNumber <= chat.tableTill) {
        return chat.chatId; // Return the chatId for this range
      }
    }
    // If no range is found, optionally return a default or undefined
    return rest.chat_id;
  } else {
    return rest.chat_id;
  }
}
