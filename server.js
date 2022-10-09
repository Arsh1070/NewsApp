require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const parser = require("body-parser");
const connectDB = require("./Database/DataBase");
const userRoute = require("./Routes/UserRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

const app = express();
connectDB();
app.use(cors());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use("/api/v1", userRoute);
app.use(notFound);
app.use(errorHandler);

// Serve static assets if in production mode.

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8003;

app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});
