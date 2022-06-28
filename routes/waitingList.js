import express from "express";
import {
  addToList,
  getWaitingList,
  getWaitingListByCourse,
  deleteUserFromWaitingList,
} from "../models/models.js";

//import { closeComplete } from "pg-protocol/dist/messages.js";

// Use the router from express
const router = express.Router();
router.use(express.json());

// Receive post request for new students interested in the student group, inside the topics.
router.post("/", async function (req, res) {
  const body = req.body;
  console.log(body);
  console.log("above is body");
  let data = await addToList(body);
  res.json({
    success: true,
    payload: "The student was added to the list",
  });
});

// Receive get request of all the students for all courses/topics
router.get("/", async function (req, res) {
  console.log(req.query.search);
  const result = await getWaitingList();
  res.json({ success: true, payload: result });
});

// Receive get request of the students by id 
router.get("/:id", async function (req, res) {
  const param = req.params.id;
  console.log("waiting list " + param);
  const result = await getWaitingListByCourse(param);
  res.json({ success: true, payload: result });
});

// Receive delete request to delete each student
router.delete("/", async function (req, res) {
  const reqBody = req.body;
  console.log("waiting list ");
  const result = await deleteUserFromWaitingList(reqBody);
  //res.send(req);
  res.json({ success: true, payload: "The student was deleted from the list" });
});

export default router;
