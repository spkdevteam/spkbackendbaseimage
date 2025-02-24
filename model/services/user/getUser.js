const { getClientDatabaseConnection } = require("../../connection")
const userSchema = require("../../userSchema")
const paginate = require("../pagination")
const { clientIdValidation, stringValidation, } = require("../validation/validation")

const getUserAll = async ({page= 1, perPage= 10, searchKey ="", clientId}) =>{

    try {
       const validations = [
        clientIdValidation({clientId}),
        stringValidation({ string: searchKey, name: "searchKey: " })
       ]
       
       const error = validations.filter((e) => e && e.status === false)
       if(error.length > 0) return {status: false, message: error.map((e) => e.message).join(", ")}
        
        //fetch all users from the database
        const db = await getClientDatabaseConnection(clientId)
        const User = db.model("User", userSchema)

        // Convert pagination values to numbers
        const pageNumber = parseInt(page, 10) || 1;
        const limit = parseInt(perPage, 10) || 10;

        if(pageNumber <= 0) return {status: false, message: "Invalid page number"}
        if(limit <= 0) return {status: false, message: "Invalid limit"} 
        const skip = (pageNumber - 1) * limit;

        const filter = {deletedAt: null};

        if (searchKey.trim()) {
            const numberSearch = !isNaN(searchKey) ? parseInt(searchKey) : null
            filter["$or"] = [
                { firstName: { $regex: searchKey, $options: "i" } },
                { lastName: { $regex: searchKey, $options: "i" } },
                { email: { $regex: searchKey, $options: "i" } },
                { phone: { $regex: searchKey, $options: "i" } },
                { city: { $regex: searchKey, $options: "i" } },
                { country: { $regex: searchKey, $options: "i" } },
                { state: { $regex: searchKey, $options: "i" } },
                { ZipCode: { $regex: searchKey, $options: "i" } },
                { address: { $regex: searchKey, $options: "i" } }  
            ];
            // Adding age filter when number search is valid
            if (numberSearch !== null) {
                filter["$or"].push({ age: { $gte: numberSearch - 2, $lte: numberSearch + 2 } });
            }
        } 

        //get total counts before pagination
        const totalData = await User.countDocuments(filter)

        //get pagination details
        const pagination = paginate({page: pageNumber, perPage: limit, totalCounts: totalData})
        //fetch filtered and paginated User data
        const fetchUsers = await User.find(filter).skip(pagination.skip).limit(pagination.limit).select("firstName lastName email phone age city country state ZipCode address isActive isVerified metaData").lean()

        // if(fetchUsers.length === 0){
        //     return {status: false, message: "No user found", totalData: 0, totalPage: 0, data: []}
        // }
        const totalPages = Math.ceil(totalData / limit)

        return {status: true, message: "Fetched all users", data: fetchUsers.map(user => ({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            age: user.age,
            city: user.city,
            country: user.country,
            state: user.state,
            ZipCode: user.ZipCode,
            address: user.address,
            isActive: user.isActive,
            isVerified: user.isVerified,
            metaData: user.metaData
        })),
        metaData:{
            currentPage: pageNumber,
            perPage: limit,
            searchKey: searchKey,
            totalData,
            totalPages
        }
    }
    } catch (error) {
        console.log("Error fetching users:", error);
        return { status: false, message: "Failed to fetch users", error: error.message } 
    }
}
module.exports = {getUserAll}