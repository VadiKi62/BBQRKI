import wifi from "node-wifi";

export const GET = async (req, res) => {
  try {
    // Initialize wifi module
    wifi.init({ iface: null }); // use default wifi interface

    const scanNetworks = () => {
      return new Promise((resolve, reject) => {
        wifi.scan((error, networks) => {
          if (error) {
            console.error("Error scanning Wi-Fi networks:", error);
            reject(error);
          } else {
            resolve(networks);
          }
        });
      });
    };

    // Scan for available networks
    const networks = await scanNetworks();
    const ssids = networks.map((network) => network.ssid);

    return new Response(JSON.stringify({ ssids }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error retrieving Wi-Fi network information:", error);
    return new Response(
      JSON.stringify({ error: "Error retrieving Wi-Fi network information" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
