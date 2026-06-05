import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("practice.db");

const row = db.prepare(`INSERT INTO randomNums (value) VALUES (?)`);

for (let index = 0; index < 100; index++) {
  const random = Math.floor(Math.random() * 100);
  row.run(random);
}

const deleteStmt = db.prepare(`DELETE FROM randomNums WHERE value = 0`).run();
const table_contents = db.prepare(`SELECT id,value FROM randomNums`).all();
console.log(table_contents);
db.close();
