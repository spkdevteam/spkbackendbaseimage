const accountLedger = require("../../model/transactions/accountLedger");

 
const getAccountLedger = async (req,res,next)=>{
try {
    const data = req.query;
    console.log(data,'input receved on server---> ')
    const result = await accountLedger(data)
    res.json(result)
} catch (error) {
    
}
}

module.exports =  getAccountLedger