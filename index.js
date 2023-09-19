const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// const path = require("path");
//router imports
// const userRoutes = require("./routes/userRoutes");
// const blogRoutes = require("./routes/blogRoutes");

//mongoose db connection
connectDB();

//.env config
dotenv.config();
//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
// app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/blog", blogRoutes);

//static file
// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
//port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `server connected to ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white
  );
});
