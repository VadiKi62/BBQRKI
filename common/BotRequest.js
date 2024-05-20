import axios from "axios";

export const sendWaiter = (message, endpoint, chat_id, onSuccess, onError) => {
  return new Promise((resolve, reject) => {
    const data = {
      chat_id: `${chat_id}`,
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
        // Check if the error is due to network issues
        if (error.response) {
          // Server responded with a status code outside of 2xx range
          console.error(
            "Server responded with error status:",
            error.response.status
          );
          reject(
            "Server responded with an error. Please try again later. Call Waiter"
          );
        } else if (error.request) {
          // Request made but no response received
          console.error("No response received from server:", error.request);
          reject(
            "No response received from server. Please check your internet connection. Call Waiter"
          );
        } else {
          // Something happened in setting up the request
          console.error("Error setting up request:", error.message);
          reject("An error occurred while setting up the request. Call Waiter");
        }
        // Call the error callback function if provided
        if (typeof onError === "function") {
          onError();
        }
        reject(error);
      });
  });
};

export const sendBill = (message, endpoint, chat_id, onSuccess, onError) => {
  return new Promise((resolve, reject) => {
    const data = {
      chat_id: `${chat_id}`,
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
      .catch((error) => {
        console.error("Error sending Call Bill/Shisha:", error);
        // Check if the error is due to network issues
        if (error.response) {
          // Server responded with a status code outside of 2xx range
          console.error(
            "Server responded with error status:",
            error.response.status
          );
          reject(
            "Server responded with an error. Please try again later. Bill/Shisha"
          );
        } else if (error.request) {
          // Request made but no response received
          console.error("No response received from server:", error.request);
          reject(
            "No response received from server. Please check your internet connection. Bill/Shisha"
          );
        } else {
          // Something happened in setting up the request
          console.error("Error setting up request:", error.message);
          reject("An error occurred while setting up the request.");
        }
        // Call the error callback function if provided
        if (typeof onError === "function") {
          onError();
        }
        reject(error);
      });
  });
};

export const sendShisha = (message, endpoint, chats_id, onSuccess, onError) => {
  return new Promise((resolve, reject) => {
    const data = {
      chat_id: `${chats_id[0]}`,
      chat_id1: `${chats_id[1]}`,
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
      .catch((error) => {
        console.error("Error sending Call Bill/Shisha:", error);
        // Check if the error is due to network issues
        if (error.response) {
          // Server responded with a status code outside of 2xx range
          console.error(
            "Server responded with error status:",
            error.response.status
          );
          reject(
            "Server responded with an error. Please try again later. Bill/Shisha"
          );
        } else if (error.request) {
          // Request made but no response received
          console.error("No response received from server:", error.request);
          reject(
            "No response received from server. Please check your internet connection. Bill/Shisha"
          );
        } else {
          // Something happened in setting up the request
          console.error("Error setting up request:", error.message);
          reject("An error occurred while setting up the request.");
        }
        // Call the error callback function if provided
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

export const sendTech = (chat_id, message) => {
  // return new Promise((resolve, reject) => {
  console.log("from BotRequest");
  const data = {
    chat_id: `${chat_id}` || -1002144756413,
    message: message,
  };
  axios
    .post("https://button.hopto.org/button-booking", data)
    .then(function (response) {
      console.log("Test Message sent to Telegram bot:", response.data);
      // resolve(response.data);
    })
    .catch(function (error) {
      console.error("Error sending sendTech:", error);
      // reject(error);
    });
  // });
};
