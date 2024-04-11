import axios from "axios";

export const sendWaiter = (
  message,
  zont,
  endpoint,
  chat_id,
  onSuccess,
  onError
) => {
  return new Promise((resolve, reject) => {
    const data = {
      chat_id: `${chat_id}`,
      table: zont,
      message: message,
    };
    axios
      .post(`https://button.hopto.org/${endpoint}`, data)
      .then((response) => {
        console.log("response", response);
        // Call the success callback function if provided
        if (typeof onSuccess === "function") {
          onSuccess();
        }
        resolve(response.data.data);
      })
      .catch((error) => {
        console.error("Error sending Call Waiter:", error);
        // Call the error callback function if provided
        if (typeof onError === "function") {
          onError();
        }
        reject(error);
      });
  });
};
export const sendBill = (
  message,
  zont,
  endpoint,
  chat_id,
  onSuccess,
  onError
) => {
  return new Promise((resolve, reject) => {
    const data = {
      chat_id: `${chat_id}`,
      table: zont,
      message: message,
    };
    axios
      .post(`https://button.hopto.org/${endpoint}`, data)
      .then(function (response) {
        // Call the success callback function if provided
        if (typeof onSuccess === "function") {
          onSuccess();
        }
        resolve(response.data);
      })
      .catch(function (error) {
        console.error("Error sending Bill:", error);
        if (typeof onError === "function") {
          onError();
        }
        reject(error);
      });
  });
};

export const sendTest = () => {
  axios
    .get("https://button.hopto.org/t")
    .then(function (response) {
      console.log("Test Message sent to Telegram bot:", response.data);
    })
    .catch(function (error) {
      console.error("Error sending test:", error);
    });
};
