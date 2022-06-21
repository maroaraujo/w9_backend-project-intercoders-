import { query } from "../index.js";

const sqlQuery = `CREATE TABLE IF NOT EXISTS courselist(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    coursename TEXT)`;

async function courseList() {
  console.log("Hello");
  const res = await query(sqlQuery);
  console.log("Course Table was created");
}

courseList();
