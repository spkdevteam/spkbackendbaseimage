const paginate = ({page, perPage, totalCounts}) =>{
    //get the limit from query
    const limit = parseInt(perPage) || 0    
    
    const skip = (page - 1) * limit

    return {
        limit,
        skip,
        currentPage: page
    }

}

module.exports = paginate