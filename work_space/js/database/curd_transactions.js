import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("practice.db");

const rows = db.prepare(`SELECT * FROM balance`).all();
console.log(rows);

db.close();
