const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res, next) => {
	res.end("Hello, world! I am alive!!");
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
})
