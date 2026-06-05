import { DatabaseSync } from "node:sqlite";

export const db = new DatabaseSync("practice.db");

db.exec(
  `CREATE TABLE if not exists paints (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  color text UNIQUE NOT NULL);`,
);
