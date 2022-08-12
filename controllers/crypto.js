const Address = require("../models/crypto");
const mongoose = require("mongoose");
const url = require('url');
const axios = require('axios');


exports.get_transactions = async (req, res) => {
   try{
     add = req.body.address ;
     if (!add) {
        res.status(400).send("Input Addres is required");
      } 
      
      payload = {
        module: 'account',
        action: 'txlist',
        address: add,
        startblock: 0,
        endblock : 99999999,
        page: 1,
        sort : 10,
        offset: 'asc',
        apikey : 'K6VUPE5JP15IQV75GVXMJ9YEHSVAHBRMI9'
      }
      const params = new url.URLSearchParams(payload);
      let answer = await axios.post('https://api.etherscan.io/api?', params);
      //console.log(answer);
      let data = answer.data;
      //const myobj = JSON.parse(answer.data);
      //for (let i=0; i< data.result.length; i++){
        //  console.log(data.result[i].blockNumber);
      //}
      console.log(data.result);
      data.result.forEach( ele => {
        var ad = {
          blockNumber : ele.blockNumber,
          timeStamp : ele.timeStamp,
          hash : ele.hash,
          nonce :  ele.nonce,
          blockHash : ele.blockHash,
          transactionIndex : ele.transactionIndex,
          from : ele.form,
          to : ele.to,
          value : ele.value,
          gas : ele.gas,
          gasPrice : ele.gasPrice,
          isError: ele.isError,
          txreceipt_status : ele.txreceipt_status,
          input : ele.input,
          contractAddress : ele.contractAddress,
          cumulativeGasUsed : ele.cumulativeGasUsed,
          gasUsed : ele.gasUsed,
          confirmations : ele.confirmations,
          methodId : ele.methodId,
          functionName : ele.functionName,
        }
        console.log(ele.nonce);
        let newAddress = new Address({
          address : ad,
          etherum : ''
      });
      newAddress.save()
      .then()
      .catch(err => {console.log(err)});   

      });
      
      
      res.json(data.result);


   }catch(err){
    console.log(err);
   }
};


exports.get_price = async (req, res) => {
  try{
        let answer = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
      //let d1 = await answer.data.json()   
        data1 = answer.data.ethereum;
        console.log(data1);
        let newAddress = new Address({
          address : undefined,
          ethereum : {inr : data1.inr}
      });
      newAddress.save()
      .then(()=> {console.log('Saved')})
      .catch(err => {console.log(err)});   
      res.json(answer.data);

  }catch(err){
   console.log(err);
  }
}

