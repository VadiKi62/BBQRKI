import { sendTech } from "./BotRequest";

export const handleSendTech = async (param) => {
  try {
    const message = `BBQR/ ${param} was opened.`;
    const chat_id = -1002144756413;
    console.log("from actionsTEch");
    // Call the sendTech function
    sendTech(
      chat_id,
      message,
      (responseData) => {
        // Success callback
        console.log("SUCCESS", responseData);
      },
      (error) => {
        // Error callback
        console.error(error);
      }
    );
  } catch (err) {
    console.error(err);
  }
};
