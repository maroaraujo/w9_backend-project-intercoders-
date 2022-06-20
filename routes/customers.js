import express from "express";
const router = express.Router();
router.use(express.json());

//fill with our datahandler functions
import {  getCustomers, 
          getCustomerById,
          getCustomerSearch,
          createCustomer
        } from "../models/models.js";



router.get("/", async function (req, res) {
  console.log(req.query.search)
  if(req.query.search !==undefined) {
    console.log("in if")
    console.log(req.query.search)
    const result = await getCustomerSearch(req.query.search);
    res.json({ success: true, payload: result });
    return;
  }
    const result = await getCustomers();
  res.json({ success: true, payload: result });
});


router.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const customer = await getCustomerById(id);
  res.json({ success: true, payload: customer });
});


router.post("/", async function (req, res) {
  const body = req.body;
  console.log(body)
  console.log("above is body")
  let data = await createCustomer(body);
  res.json({ success: true, payload: "The new customer was added"});
});







export default router;