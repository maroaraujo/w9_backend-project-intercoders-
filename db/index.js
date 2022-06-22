import pg from "pg";

const pool = new pg.Pool({
  user: "akzqousrvffswq",
  host: "ec2-34-242-8-97.eu-west-1.compute.amazonaws.com",
  database: "d8ch0id1b29srl",
  password: "deae82e2628f075ea26660eb3a140ed83527fb02e8713411368fccd37f9bc926",
  port: "5432",
  //ssl: { rejectUnauthorized: false },
});

export function query(text, params, callback) {
  return pool.query(text, params, callback);
}
