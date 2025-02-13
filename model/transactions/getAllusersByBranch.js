import { getClientDatabaseConnection } from "../connection"




async function getAllusersByBranch({ clientId, branchId }) {
    const db = getClientDatabaseConnection(clientId)
    const Transaction =await db.model('Transaction', transactionSchema)
    const result =await  Transaction.find({})
    return result
    }


    module.exports  = getAllusersByBranch