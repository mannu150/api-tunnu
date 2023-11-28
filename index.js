const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 5001;
app.use(cors());
app.use("/api/v1", require("./routes/productRoutes"));

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

module.exports = app