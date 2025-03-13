const { getClientDatabaseConnection } = require("../../connection")
const {userSchema} = require("../../userSchema")
const paginate = require("../pagination")
const { clientIdValidation, stringValidation, stringValidationWithEmptyString, } = require("../validation/validation")

const getUserAll = async ({page= 1, perPage= 10, searchKey ="", clientId}) =>{

    try {
       const validations = [
        clientIdValidation({clientId}),
        stringValidationWithEmptyString({ string: searchKey, name: "searchKey: " })
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

        if (searchKey && searchKey.trim() !== "") {
            // searchKey = searchKey.replace(/^"|"$/g, "").trim() 
            const numberSearch = !isNaN(searchKey) ? parseInt(searchKey) : null
            filter["$or"] = [
                { firstName: { $regex: searchKey, $options: "i" } },
                { lastName: { $regex: searchKey, $options: "i" } },
                { email: { $regex: searchKey, $options: "i" } },
                { phone: { $regex: searchKey, $options: "i" } },
                { gender: { $regex: searchKey, $options: "i" } },
                { bloodGroup: { $regex: searchKey, $options: "i" } },
                { family: { $regex: searchKey, $options: "i" } },
                { leaveDetails: { $regex: searchKey, $options: "i" } },
                { documents: { $regex: searchKey, $options: "i" } },
                { "address.city": { $regex: searchKey, $options: "i" } },  
                { "address.state": { $regex: searchKey, $options: "i" } },
                { "address.country": { $regex: searchKey, $options: "i" } }
            ]
            // Adding age filter when number search is valid
            // if (numberSearch !== null) {
            //     filter["$or"].push({ age: { $gte: numberSearch - 2, $lte: numberSearch + 2 } });
            // }
            if (numberSearch !== null) {
                filter["$or"].push({ age: { $gte: numberSearch - 2, $lte: numberSearch + 2 } });
            }
            
        } 

        //get total counts before pagination
        const totalData = await User.countDocuments({ ...filter, deletedAt: null});

        //get pagination details
        const pagination = paginate({page: pageNumber, perPage: limit, totalCounts: totalData})
        //fetch filtered and paginated User data
        const fetchUsers = await User.find({...filter, deletedAt: null}).skip(pagination.skip).limit(pagination.limit)
        .select("firstName lastName profileImage email phone gender  bloodGroup documents leaveDetails family address isActive isVerified metaData").lean()

        // if(fetchUsers.length === 0){
        //     return {status: false, message: "No user found", totalData: 0, totalPage: 0, data: []}
        // }
        const totalPages = Math.ceil(totalData / limit)

        return {status: true, message: "Fetched all users", data: fetchUsers.map(user => ({
            firstName: user.firstName,
            lastName: user.lastName,
            profileImage : user.profileImage,
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            bloodGroup:user.bloodGroup,
            address:user.address,
            documents:user.documents,
            leaveDetails:user.leaveDetails,
            family:user.family,
            designation:user.designation,
            department:user.department,
            maritalStatus:user.maritalStatus,
            dateOfBirth:user.dateOfBirth,
            isVerified:user.isVerified,
            isActive:user.isActive,
            loginOptions:user.loginOptions,
            editedBy:user.editedBy,
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