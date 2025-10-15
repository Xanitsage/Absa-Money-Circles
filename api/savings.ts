import type { IncomingMessage, ServerResponse } from "http";
import { storage } from "../server/storage";

export default async function handler(_req: IncomingMessage, res: ServerResponse) {
  try {
    const savingsGoals = await storage.getSavingsGoals(1);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(savingsGoals));
  } catch (error) {
    console.error("Error fetching savings goals:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Failed to fetch savings goals" }));
  }
}