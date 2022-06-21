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

export async function getWaitingList() {
  console.log("b4 await");
  const response = await query("SELECT * FROM waitinglist;");
  console.log("after await");
  const display = response.rows;
  return display;
}

export async function getWaitingListByCourse(param) {
  console.log("b4 await");
  const response = await query(
    `SELECT * FROM waitinglist WHERE coursename = '${param}';`
  );
  console.log("after await " + param);
  const display = response.rows;
  return display;
}

export async function addToCourse(body) {
  const queryText = `INSERT INTO courselist (coursename) 
  VALUES ('${body.coursename}')`;
  const rows = await query(queryText);

  console.log("rows" + rows);
  return rows;
}

export async function getCourse() {
  console.log("b4 await");
  const response = await query("SELECT * FROM courselist;");
  console.log("after await");
  const display = response.rows;
  return display;
}

export async function getAnnouncement() {
  console.log("b4 await");
  const response = await query("SELECT * FROM announcementlist;");
  console.log("after await");
  const display = response.rows;
  return display;
}

export async function addToAnnouncement(body) {
  const queryText = `INSERT INTO announcementlist (id, topic, student, date, time ) 
  VALUES ('${body.id}', '${body.topic}', '${body.student}', '${body.date}','${body.time}')`;
  const rows = await query(queryText);

  console.log("rows" + rows);
  return rows;
}

export async function deleteUserFromWaitingList(body, param) {
  console.log("b4 await");
  const response = await query(
    `DELETE FROM waitinglist WHERE name= '${body.name}' AND coursename = '${param}';`
  );
  console.log("after await " + param + " " + body.name);
  const display = response.rows;
  return display;
}
