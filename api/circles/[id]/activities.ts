import type { IncomingMessage, ServerResponse } from "http";
import { storage } from "../../../server/storage";

export default async function handler(req: IncomingMessage & { method?: string; url?: string }, res: ServerResponse) {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Allow", "GET");
    res.end("Method Not Allowed");
    return;
  }

  try {
    const url = req.url || "";
    const match = url.match(/\/api\/circles\/(\d+)\/activities/);
    const idStr = match?.[1];
    const circleId = idStr ? parseInt(idStr, 10) : NaN;
    if (isNaN(circleId)) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Invalid circle ID" }));
      return;
    }

    const activities = await storage.getCircleActivities(circleId);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(activities));
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Failed to fetch activities" }));
  }
}