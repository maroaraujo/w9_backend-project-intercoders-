import express from "express";
const router = express.Router();
router.use(express.json());

import {addToList} from "../models/models.js";

router.post("/join/:id", async function (req, res) {
  const body = req.body;
  const param = (req.params.id)
  console.log(body);
  console.log("above is body");
  let data = await addToList(body, param);
  res.json({ success: true, payload: "The new member has been added to the list" });
});

export default router;