const companySchema = require("../../company")
const { getClientDatabaseConnection } = require("../../connection")
const paginate = require("../pagination")
const { clientIdValidation, stringValidationWithSpace, stringValidation } = require("../validation/validation")

const getCompanyAll = async ({page= 1, perPage= 10, searchKey ="", clientId}) =>{
    try {
        const validations = [
            clientIdValidation({clientId}),
            stringValidation({string: searchKey, name: "searchKey: " })
        ]
        //check the validation error
        console.log(validations,'444444');
        
        const error = validations.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map(e => e.message).join(",")};
        console.log(error,'->error');
        //fetch all companies from the db
        const db = await getClientDatabaseConnection(clientId)
        const Company = await db.model("company", companySchema)

        //convert pagination values to numbers
        const pageNumber = parseInt(page, 10) || 1;
        const limit = parseInt(perPage, 10) || 10;

        if(pageNumber <= 0) return {status: false, message: "Invalid page number"}
        if(limit <= 0) return {status: false, message: "Invalid limit"} 
        
        const filter = {deletedAt: null}
        if(searchKey.trim()){
            filter["$or"] = [
                { name: { $regex: searchKey, $options: "i" } },
                { incorporationName: { $regex: searchKey, $options: "i" } },
                { cinNumber: { $regex: searchKey, $options: "i" } },
                { gstNumber: { $regex: searchKey, $options: "i" } },
                { prefix: { $regex: searchKey, $options: "i" } },
                { email: { $regex: searchKey, $options: "i" } },
                { contactNumber: { $regex: searchKey, $options: "i" } },
                { city: { $regex: searchKey, $options: "i" } },
                { country: { $regex: searchKey, $options: "i" } },
                { state: { $regex: searchKey, $options: "i" } },
                { ZipCode: { $regex: searchKey, $options: "i" } },
                { address: { $regex: searchKey, $options: "i" } }  
            ];
        }
        //get total counts before pagination
        const totalData = await Company.countDocuments(filter)
         //get pagination details
         const pagination = paginate({page: pageNumber, perPage: limit, totalCounts: totalData})
        //fetch all compnaies
        const fetchCompany = await Company.find(filter).skip(pagination.skip).limit(pagination.limit).select("name incorporationName cinNumber gstNumber prefix email city state country address ZipCode metaData")
        const totalPages = Math.ceil(totalData / limit)
        return {status: true, message: "Fetched all users", data: fetchCompany.map((company) =>({
            name: company.name,
            incorporationName: company.incorporationName,
            cinNumber: company.cinNumber,
            gstNumber: company.gstNumber,
            prefix: company.prefix,
            Logo: company.Logo,
            email: company.email,
            contactNumber: company.contactNumber,
            city: company.contactNumber,
            state: company.state,
            country: company.country,
            ZipCode: company.ZipCode,
            address: company.address,
            metaData: company.metaData

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
        console.log("error fetching all companies", error);
        return {status: false, message: "Falied fetching companies", error: error.message}   
    }
}

module.exports = getCompanyAll