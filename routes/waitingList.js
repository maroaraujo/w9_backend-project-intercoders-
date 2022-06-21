import express from "express";
const router = express.Router();
router.use(express.json());

import {addToList, getWaitingList, getWaitingListByCourse} from "../models/models.js";

router.post("/join/:id", async function (req, res) {
  const body = req.body;
  const param = (req.params.id)
  console.log(body);
  console.log("above is body");
  let data = await addToList(body, param);
  res.json({ success: true, payload: "The new member has been added to the list" });
});

router.get("/", async function (req, res) {
    console.log(req.query.search);
    const result = await getWaitingList();
    res.json({ success: true, payload: result });
  });
  

  router.get("/:id", async function (req, res) {
    const param = (req.params.id)
    console.log("waiting list " + param);
    const result = await getWaitingListByCourse(param);
    res.json({ success: true, payload: result });
  });

export default router;