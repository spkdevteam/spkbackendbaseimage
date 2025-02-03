const fetchBillwiseOutStandingLEdger = require("../../model/transactions/billwiseOutStanding")

const getPartyOutStanding =async  (req,res)=>{
try {
    const data = req.params
    console.log(data,'99999999999999999999--------------------')
    const result =await fetchBillwiseOutStandingLEdger(data) 
    res.status(result.statusCode).json({status:true,message:result.message,data:result.data})

} catch (error) {
    
}
}
module.exports = getPartyOutStanding