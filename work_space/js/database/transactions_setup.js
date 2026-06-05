import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("practice.db");

db.exec(`CREATE TABLE balance(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name text NOT NULL,
  amount INTEGER NOT NULL
  );`);

const insertStmt = db.prepare(`INSERT INTO balance (name,amount) VALUES (
    ?,?);`);

insertStmt.run("charitha", 100);
insertStmt.run("bhargavi", 200);
insertStmt.run("jayanth", 1000);
insertStmt.run("aa", 2000);

db.close();
