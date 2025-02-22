
const logOutUser = async (req, res, next) =>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(400).json({status: false, message: "User not logged out successfully"})
        }
        
        await res.clearCookie("token")
        return res.status(200).json({status: true, message: "User logged out successfully"})
    } catch (error) {
        next(error)
    }
}
module.exports= logOutUser