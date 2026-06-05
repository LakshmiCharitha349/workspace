import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("practice.db");

const insertStatement = db.prepare(
  `insert into people(name, age) values (?, ?)`,
);
const deleteRows = db.prepare(`delete FROM people WHERE name = ?`);
const updateRows = db.prepare(`UPDATE people SET age = 20 WHERE id = 1`);
insertStatement.run("abc", 20);
insertStatement.run("def", 30);

deleteRows.run("abc");
updateRows.run();
const data = db.prepare(`SELECT id, name, age FROM people`).all();

// for (const row of data) {
//   console.log(row.id, row.name, row.age);
// }

console.log(data);

db.close();
