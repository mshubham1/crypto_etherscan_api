const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  address: [ {blockNumber : {type: Number},
    timeStamp : {type: Number},
    hash : {type: String},
    nonce : {type: Number},
    blockHash : {type: String},
    transactionIndex : {type: Number},
    from : {type: String},
    to : {type: String},
    value : {type: Number},
    gas : {type: Number},
    gasPrice : {type: Number},
    isError: { type: Number },
    txreceipt_status : {type: String},
    input : {type: String},
    contractAddress : {type: String},
    cumulativeGasUsed : {type: Number},
    gasUsed : {type: Number},
    confirmations : {type: Number},
    methodId : {type: String},
    functionName : {type: String},},],

    ethereum : {inr : {type: Number}},
 
});
module.exports = mongoose.model("Address", addressSchema);;