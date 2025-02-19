
const apiFilter = async ({clientId, searchKey, APIName, path}) =>{
    const filter = {}

    if(clientId){
        filter["clientId"] = clientId
    }

    if(APIName){
        filter["APIName"] = {$regex : APIName, $options: "i"}
    }

    if(path){
        filter["path"] = {$regex: path, $options: "i"}
    }

    if(searchKey){
        filter["$or"] = [
            {APIName: {$regex : APIName, $options: "i"}},
            {path: {$regex: path, $options: "i"}}
        ] 
    }

    return filter

}

module.exports = apiFilter