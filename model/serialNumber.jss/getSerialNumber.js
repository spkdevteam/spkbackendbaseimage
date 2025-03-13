const { getClientDatabaseConnection } = require("../connection");
const serialNumebrSchema = require("../serialNumber");






const getserialNumber = async (collection, clientId, prefix = "") => {
    try {
        console.log(collection, clientId, prefix, 'collection, clientId, *********************')
        const db = await getClientDatabaseConnection(clientId);
        const serialNumber = await db.model('serialNumber', serialNumebrSchema)
        console.log(await serialNumber.find({ collectionName: collection, prefix: prefix }));

        const result = await serialNumber.findOneAndUpdate(
            { collectionName: collection, prefix: prefix },
            { $inc: { nextNum: 1 } },
        );

        if (result?.nextNum) {
            console.log(result, '<<<<==ressult from prefic ')
            console.log("inside if");
            console.log(prefix + '-' + new Date().toISOString()?.split('T')[0]?.split('-')[0] + '-' + result.prefix + result.nextNum, ' prefix + ' - ' + new Date().toISOString()?.split([0]?.split(' - ')[0] + ' - ' + result.prefix + result.nextNum')
            return prefix + '-' + result.nextNum
        }
        else {
            
            console.log("inside else",{ collectionName: collection, prefix: prefix, nextNum: 1000001 } );
            const result = await serialNumber?.updateOne({ collectionName: collection, prefix: prefix }, { $set: { collectionName: collection, prefix: prefix, nextNum: 1000001 } }, { upsert: true })
            if (result?.upsertedCount) {
                const temp = getserialNumber(collection, clientId, prefix)
                return temp
            }

        }
    } catch (error) {
        console.log(error)
        return null
    }
}


module.exports = getserialNumber