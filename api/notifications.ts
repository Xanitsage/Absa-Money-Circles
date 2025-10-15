import type { IncomingMessage, ServerResponse } from "http";

export default async function handler(_req: IncomingMessage, res: ServerResponse) {
  try {
    const notifications = [
      {
        id: 1,
        title: "Payment Received",
        message: "Your contribution to Family Vacation Fund was received.",
        type: "success",
        timestamp: new Date().toISOString(),
        read: false,
      },
      {
        id: 2,
        title: "New Circle Invite",
        message: "You were invited to Office Party circle.",
        type: "info",
        timestamp: new Date(Date.now() - 3600_000).toISOString(),
        read: false,
      },
    ];

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(notifications));
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Failed to fetch notifications" }));
  }
}