import axios from "axios";

export const sendWaiter = (message, zont) => {
  return new Promise((resolve, reject) => {
    const data = {
      chat_id: -4074718635,
      table: zont,
      message: message,
    };
    console.log("message!!! ", message);
    axios
      .post("https://button.hopto.org/waiter", data)
      .then((response) => {
        console.log(`Table ${data.table} called the waiter`, response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Error sending Call Waiter:", error);
        // const err = JSON.stringify(error);
        // alert(messageOops + `ERROR : ${err}`);
        reject(error);
      });
  });
};
export const sendBill = (message, zont) => {
  return new Promise((resolve, reject) => {
    const data = {
      chat_id: -4074718635,
      table: zont,
      message: message,
    };
    console.log("message!!! ", message);
    axios
      .post("https://button.hopto.org/bill", data)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        console.error("Error sending Bill:", error);
        // const err = JSON.stringify(error);
        // alert(messageOops + `ERROR : ${err}`);
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
