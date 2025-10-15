import type { IncomingMessage, ServerResponse } from "http";
import { storage } from "../server/storage";

export default async function handler(req: IncomingMessage & { method?: string }, res: ServerResponse & { status?: (code: number) => any }) {
  try {
    const user = await storage.getUser(1);
    if (!user) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "User not found" }));
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(user));
  } catch (error) {
    console.error("Error fetching user:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Failed to fetch user" }));
  }
}