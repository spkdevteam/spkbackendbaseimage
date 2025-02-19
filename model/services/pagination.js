const paginate = (query, defaultLimit = 10) =>{
    //get the limit from query
    const limit = parseInt(query.limit) || defaultLimit

    //get the page number from query or default is 1
    const page = parseInt(query.page) || 1
    
    const skip = (page - 1) * limit

    return {
        limit,
        skip,
        currentPage: page
    }

}

module.exports = paginate