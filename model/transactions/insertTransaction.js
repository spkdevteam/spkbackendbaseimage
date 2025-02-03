const { default: mongoose } = require("mongoose");
const { getClientDatabaseConnection } = require("../connection");
const getSerialNumber = require("../serialNumber.jss/getSerialNumber");
const transactionSchema = require("../transactions");

const createOrUpdateTransaction = async (input) => {
  try {
    console.log(input, "Transaction Input");

    const {
      _id,
      companyId,
      accountHead,
      branchId,
      partyId,
      date,
      autoNarration,
      narration,
      amount,
      type,
      clientId = '',
      invoice = [],
      prefix
    } = input;

    if (![companyId, accountHead, branchId, partyId, date].every(Boolean)) {
      return { status: false, message: "Required fields are missing", statusCode: 400 };
    }

    if (!["credit", "debit"].includes(type)) {
      return { status: false, message: "Invalid transaction type", statusCode: 400 };
    }

    const db = await getClientDatabaseConnection(clientId);
    const Transaction = db.model("transaction", transactionSchema);

    const inputInvoice = invoice[0];
    console.log(inputInvoice, 'input invoice ')
    // Fetch existing transactions for the given invoice
    const transactions = await Transaction.find({ _id: inputInvoice?._id });

    const creditEntryId = transactions.find(entry => entry.type === "credit")?._id;
    const debitEntryId = transactions.find(entry => entry.type === "debit")?._id;

    // Generate transaction ID if neither credit nor debit exists
    const transactionId = !creditEntryId && !debitEntryId
      ? await getSerialNumber(accountHead, clientId, prefix)
      : creditEntryId?.transactionId;

    const creditEntry = {
      companyId,
      branchId,
      partyId: type=='credit'? partyId: accountHead ,
      date,
      autoNarration,
      narration,
      amount,
      type: "credit",
      invoice,
      transactionId
    };

    const debitEntry = {
      companyId,
      branchId,
      partyId:type=="debit"? partyId:accountHead,
      date,
      autoNarration,
      narration,
      amount,
      type: "debit",
      invoice,
      transactionId
    };

    // Remove _id if it's undefined so MongoDB generates it
    if (creditEntryId) creditEntry._id = creditEntryId;
    if (debitEntryId) debitEntry._id = debitEntryId;

    // Perform upsert operations
    const credit = await Transaction.findOneAndUpdate(
      { _id: creditEntryId || new mongoose.Types.ObjectId(), type: "credit" },
      { $set: creditEntry },
      { upsert: true, new: true }
    );

    const debit = await Transaction.findOneAndUpdate(
      { _id: debitEntryId || new mongoose.Types.ObjectId(), type: "debit" },
      { $set: debitEntry },
      { upsert: true, new: true }
    );

    return { status: true, message: "Transaction created successfully", data: { credit, debit } };
  } catch (error) {
    console.error("Error in createOrUpdateTransaction:", error.message);
    return { status: false, message: error.message, statusCode: 500 };
  }
};

module.exports = createOrUpdateTransaction;
