import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.port || 3001;

// import routes from route files
import userRouter from "./routes/users.js";

//unpack json
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
