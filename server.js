const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const router1 = require("./routes/crypto");

const app = express();
//To prevent CORS errors
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));
//connecting to databadse

require("./config/database").connect();
app.use("/api/",router1);

const port = process.env.PORT || 5000;
console.log(port);
app.listen(port, () => console.log(`Server running on port ${port}`));