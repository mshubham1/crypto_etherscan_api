const express = require("express");
const router = express.Router();
var cron = require('node-cron');
var request = require('request');
const {get_transactions,get_price} = require("../controllers/crypto");

//Handling all the incoming requests
router.post("/transactions", get_transactions);

cron.schedule("*/10 * * * *", async function() {
    request('http://localhost:5000/api/ethereum')
    console.log('inside cron function');
});
router.get("/ethereum",get_price);
module.exports = router;