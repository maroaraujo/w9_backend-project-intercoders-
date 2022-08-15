import pg from "pg";

export const pool = new pg.Pool({
  user: "fzzcienriixhqb",
  host: "ec2-52-208-164-5.eu-west-1.compute.amazonaws.com",
  database: "d7rk62chvr00g1",
  password: "12c89fa8b3e0b0a91c7ec714e752475401a16bce215b808b173c920ed27b881d",
  port: "5432",
  ssl: { rejectUnauthorized: false },
});

export function query(text, params, callback) {
  return pool.query(text, params, callback);
}
