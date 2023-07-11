require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./config/db.config");

app.use(cors());

db();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Welcome to the ReviewMfCourse API");
});

app.use("/api/users", require("./routes/user.routes.js"));
app.use("/api/reviews", require("./routes/review.routes.js"));
app.use("/api/schools", require("./routes/school.routes.js"));
app.use("/api/courses", require("./routes/course.routes.js"));
app.use("/api/teachers", require("./routes/teacher.routes.js"));
app.use("/api/trs", require("./routes/tr.routes.js"));
app.use("/api/admins", require("./routes/admin.routes.js"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/dist/"));

  app.get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
  });
}

app.listen(process.env.PORT || 2022, () => {
  console.log("ClassRate servers up and running at Port " + process.env.PORT + ". ");
});
