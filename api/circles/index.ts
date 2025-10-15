import type { IncomingMessage, ServerResponse } from "http";
import { storage } from "../../server/storage";
import { createCircleSchema } from "../../shared/schema";

function readJsonBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      if (!data) return resolve(undefined);
      try {
        resolve(JSON.parse(data));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

export default async function handler(req: IncomingMessage & { method?: string }, res: ServerResponse) {
  try {
    if (req.method === "GET") {
      const userId = 1;
      const circles = await storage.getMoneyCircles(userId);
      const enrichedCircles = await Promise.all(
        circles.map(async (circle) => {
          const members = await storage.getCircleMembers(circle.id);
          const memberUsers = await Promise.all(
            members.map(async (member) => {
              const user = await storage.getUser(member.userId);
              return {
                id: member.id,
                name: user?.fullName || "Unknown User",
              };
            }),
          );

          const now = new Date();
          const created = new Date(circle.createdAt);
          const minutes = Math.floor((now.getTime() - created.getTime()) / 60000);
          const startedTimeAgo = minutes < 60 ? `${minutes} minutes ago` : `${Math.floor(minutes/60)} hours ago`;

          const pendingContributions = members.filter(
            (member) => member.contributedAmount < member.targetAmount * 0.5,
          ).length;

          return {
            id: circle.id,
            name: circle.name,
            targetAmount: circle.targetAmount,
            currentAmount: circle.currentAmount,
            targetDate: circle.targetDate,
            memberCount: members.length,
            members: memberUsers,
            unreadMessages: Math.floor(Math.random() * 10),
            startedTimeAgo,
            pendingContributions,
          };
        }),
      );

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(enrichedCircles));
      return;
    }

    if (req.method === "POST") {
      try {
        const body = await readJsonBody(req);
        const validationResult = createCircleSchema.safeParse(body);
        if (!validationResult.success) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "Invalid circle data", errors: validationResult.error.errors }));
          return;
        }
        const userId = 1;
        const circle = await storage.createMoneyCircle(validationResult.data, userId);
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(circle));
        return;
      } catch (e) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Invalid JSON body" }));
        return;
      }
    }

    res.statusCode = 405;
    res.setHeader("Allow", "GET, POST");
    res.end("Method Not Allowed");
  } catch (error) {
    console.error("Error handling /api/circles:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Failed to handle circles" }));
  }
}