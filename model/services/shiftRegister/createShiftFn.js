const mongoose = require("mongoose");
const { getClientDatabaseConnection } = require("../../connection");
const { shiftRegisterSchema } = require("../../shiftRegister");
const { clientIdValidation, mongoIdValidation, dateValidation, stringValidationWithSpace } = require("../validation/validation");

const createShiftFn = async ({ _id = null, userId, shiftName, shiftDetails, startTime, endTime, companyId, clientId }) => {
    try {

        const validations = [
            clientIdValidation({ clientId }),
            // mongoIdValidation({_id: companyId}),
            dateValidation({ date: startTime }),
            dateValidation({ date: endTime }),
            stringValidationWithSpace({ string: shiftName, name: "shiftName" }),
            // stringValidationWithSpace({string: shiftDetails, name: "shiftDetails"}),
            // mongoIdValidation({_id: _id}),
            // mongoIdValidation({_id: userId})
        ]

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return { status: false, message: "Invalid userId" }
        }
        if (!mongoose.Types.ObjectId.isValid(companyId)) {
            return { status: false, message: "Invalid companyId" }
        }
        if (_id && !mongoose.Types.ObjectId.isValid(_id)) {
            return { status: false, message: "Invalid _id" }
        }

        const error = validations.filter((e) => e && e.status === false)
        if (error.length > 0) return { status: false, message: error.map((e) => e.message).join(", ") }
        console.log("error :", error);

        const db = await getClientDatabaseConnection(clientId)
        const Shift = await db.model("shiftRegister", shiftRegisterSchema)

        const shifts = await Shift.insertRole({
            _id,
            userId,
            shiftName,
            shiftDetails,
            startTime,
            endTime,
            companyId
        })
        console.log("first", shifts);


        if (!shifts.status) {
            return { status: false, message: "Unable to create shifts" }
        }

        return { status: true, message: "Shifts created successfully", data: { _id: shifts.shiftRegister._id } }

        // return {status: true, message: "your shift is created", data: {
        //     shiftId: "67c04ca442adcc1853fa4646",
        //     companyId,
        //     shiftName,
        //     startTime,
        //     endTime
        // }}
    } catch (error) {
        return { status: false, message: error.message };
    }
}

module.exports = createShiftFn;