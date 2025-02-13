const { status } = require("express/lib/response")
const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")

const createUser =async ({ firstName, lastName, profileImage, email, phone, gender, age, bloodGroup, city, state, country, ZipCode, address,clientId })=>{
    try {
        if(!clientId) return {status:false,message:'Some network credential are missing '}

        const db =await getClientDatabaseConnection(clientId)
        const User =await db.model('user',userSchema)
        const result = await User.find({})
        return {status:true,message:'User created successFull',data:{_id:result[0]._id}}

        
    } catch (error) {
        next(error)
    }
}

module.exports = createUser 