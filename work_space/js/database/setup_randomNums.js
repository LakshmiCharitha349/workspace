import { DatabaseSync } from "node:sqlite";

export const db = new DatabaseSync("practice.db");

db.exec(
  `CREATE TABLE if not exists randomNums (
   id INTEGER PRIMARY KEY,
   value INTEGER)`,
);
