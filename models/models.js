import { application } from "express";
import { query } from "../db/index.js";

export async function createUser(body) {
  const queryText = `INSERT INTO users (username, password) 
  VALUES ('${body.username}', '${body.password}')`;
  const rows = await query(queryText);

  console.log("rows" + rows);
  return rows;
}

export async function login(body) {
  console.log("before query " + body.username);
  const queryText = `SELECT * FROM users WHERE username = '${body.username}' AND password = '${body.password}'`;
  console.log(queryText);
  const { rows } = await query(queryText);
  console.log("rows" + rows);
  return rows;
}

export async function getUsers() {
  console.log("b4 await");
  const response = await query("SELECT * FROM users;");
  console.log("after await");
  const display = response.rows;
  return display;
}

export async function addToList(body, param) {
  const queryText = `INSERT INTO waitinglist (name, coursename) 
  VALUES ('${body.name}', '${param}')`;
  const rows = await query(queryText);

  console.log("rows" + rows);
  return rows;
}