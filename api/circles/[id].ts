import type { IncomingMessage, ServerResponse } from "http";
import { storage } from "../../server/storage";

export default async function handler(req: IncomingMessage & { method?: string; url?: string }, res: ServerResponse) {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Allow", "GET");
    res.end("Method Not Allowed");
    return;
  }

  try {
    const url = req.url || "";
    const match = url.match(/\/api\/circles\/(\d+)/);
    const idStr = match?.[1];
    const circleId = idStr ? parseInt(idStr, 10) : NaN;
    if (isNaN(circleId)) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Invalid circle ID" }));
      return;
    }

    const circleDetails = await storage.getCircleDetails(circleId);
    if (!circleDetails) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "Circle not found" }));
      return;
    }

    const members = await storage.getCircleMembers(circleId);
    const memberUsers = await Promise.all(
      members.map(async (member) => {
        const user = await storage.getUser(member.userId);
        return { id: member.id, name: user?.fullName || "Unknown User" };
      }),
    );

    const now = new Date();
    const created = new Date(circleDetails.createdAt);
    const minutes = Math.floor((now.getTime() - created.getTime()) / 60000);
    const startedTimeAgo = minutes < 60 ? `${minutes} minutes ago` : `${Math.floor(minutes/60)} hours ago`;

    const pendingContributions = members.filter(
      (member) => member.contributedAmount < member.targetAmount * 0.5,
    ).length;

    const fullDetails = {
      ...circleDetails,
      memberCount: members.length,
      members: memberUsers,
      unreadMessages: Math.floor(Math.random() * 10),
      startedTimeAgo,
      pendingContributions,
    };

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(fullDetails));
  } catch (error) {
    console.error("Error fetching circle details:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Failed to fetch circle details" }));
  }
}