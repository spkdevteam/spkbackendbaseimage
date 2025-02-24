const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const rulesSchema = require("../../rules");
const { clientIdValidation } = require("../validation/validation");

const deleteRulesAndPermissonFn = async ({ id, clientId }) => {
    try {
        const validation = [
            clientIdValidation({ clientId })
        ];

        const error = validation.filter((e) => e && e.status === false);
        if (error.length > 0) return { status: false, message: error.map((e) => e.message().join(", ")) };


        if (!mongoose.Types.ObjectId.isValid(id)) {
            return { status: false, message: "Invalid rule ID" };
        };


        const db = await getClientDatabaseConnection(clientId);
        const RulesAndPermission = await db.model("Rule", rulesSchema);

        const rulesAndPermission = await RulesAndPermission.findOne({ _id: id, deletedAt: null });

        if (!rulesAndPermission) return { status: false, message: "Networking problem, try again." }


        const deletingRulesAndPermission = await RulesAndPermission.updateOne({ _id: id, deletedAt: null }, {
            $set: {
                deletedAt: Date.now()
            }
        })

        if (deletingRulesAndPermission.modifiedCount > 0) return { status: true, message: "The particular rule is deleted." }

        return { status: false, message: "Operation Failed." }
    } catch (error) {
        return { status: false, message: error.message }
    }
}

module.exports = deleteRulesAndPermissonFn;