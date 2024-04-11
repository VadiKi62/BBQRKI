import AWS from "aws-sdk";

export const GET = async (req, res) => {
  try {
    // Create an EC2 client
    const ec2 = new AWS.EC2({ region: "us-east-1" });

    // Describe the network interfaces on the EC2 instance
    const response = await ec2.describeNetworkInterfaces().promise();

    // Extract the private IP addresses from the network interfaces
    const wifiList = response.NetworkInterfaces?.map(
      (networkInterface) => networkInterface.PrivateIpAddress
    );

    if (wifiList && wifiList.length > 0) {
      return new Response(JSON.stringify(wifiList), { status: 200 });
    } else {
      return new Response(
        { error: "No Wi-Fi network interfaces found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error retrieving Wi-Fi network information:", error);

    return new Response(
      { error: "Error retrieving Wi-Fi network information" },
      { status: 500 }
    );
  }
};
