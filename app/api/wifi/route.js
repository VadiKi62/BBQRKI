import wifi from "node-wifi";

export const GET = async (req, res) => {
  try {
    wifi.init({ iface: null });

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

// export async function GET(request) {
//   try {
//     const networks = await new Promise((resolve, reject) => {
//       scanner.scan((err, networks) => {
//         if (err) {
//           console.error("Error scanning Wi-Fi networks:", err);
//           reject(err);
//         } else {
//           resolve(networks);
//         }
//       });
//     });

//     return new Response(
//       {
//         ssids: networks.map((network) => network.ssid),
//       },
//       {
//         status: 200,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (error) {
//     console.error("Error retrieving Wi-Fi network information:", error);
//     return new Response(
//       JSON.stringify({ error: "Error retrieving Wi-Fi network information" }),
//       {
//         status: 500,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   }
// }
