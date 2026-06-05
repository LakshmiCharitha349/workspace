import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("practice.db");

const insertStmt = db.prepare(`INSERT INTO paints (color) VALUES ('orange');`);

insertStmt.run();
const rows = db.prepare(`SELECT id,color FROM paints;`).all();

for (const row of rows) {
  console.log(row.color);
}

db.close();
