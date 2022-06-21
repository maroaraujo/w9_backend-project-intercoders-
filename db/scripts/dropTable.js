import { query } from "../index.js";

const sqlQuery = `DROP TABLE IF EXISTS waitinglist;`;

async function dropWaitingList() {
  const res = await query(sqlQuery);
  console.log("Table was Dropped");
}

dropTable();
