const express = require("express");
const cors = require("cors");
const app = express()
app.use(express.json());
app.use(cors());
const mongoose = require("mongoose");
const colors = require("colors");
require('dotenv').config()
const tourRoute = require("./routes/tourPackage.routes");
const tourRoute2 = require("./routes/tourPackage2.route")
app.get("/", async (req, res, next) => {

    res.send(" api is working  properly ")
})
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {

    console.log("database connect succesfully")
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)


})
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/tour", tourRoute2);



module.exports = app