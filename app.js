import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.port || 3002;

// import routes from route files
import userRouter from "./routes/users.js";
import waitingListRouter from "./routes/waitingList.js";
import courseRouter from "./routes/course.js";
import announcementRouter from "./routes/announcement.js";

//unpack json
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/waitinglist", waitingListRouter);
app.use("/course", courseRouter);
app.use("/announcement", announcementRouter);

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
