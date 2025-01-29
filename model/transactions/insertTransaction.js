const { getClientDatabaseConnection } = require("../connection");
const transactionSchema = require("../transactions");

 

const createOrUpdateTransaction = async (input) => {
  try {
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
      invoice = []
    } = input;
    console.log(input,'inputinputinputinputinputinput')

     

    if (!companyId) {
      return { status: false, message: 'Company ID is required', statusCode: 400 };
    }

    if (!accountHead) {
      return { status: false, message: 'Account Head is required', statusCode: 400 };
    }

    if (!branchId) {
      return { status: false, message: 'Branch ID is required', statusCode: 400 };
    }

    if (!partyId) {
      return { status: false, message: 'Party ID is required', statusCode: 400 };
    }

    if (!date) {
      return { status: false, message: 'Date is required', statusCode: 400 };
    }

    if (!type || !['credit', 'debit'].includes(type)) {
      return { status: false, message: 'Valid transaction type is required (credit or debit)', statusCode: 400 };
    }
    const db = await getClientDatabaseConnection(clientId)
    const Transaction = await db.model('transaction',transactionSchema)
    // Ensure transaction ID has a valid ObjectId format (if applicable)
    if(_id){
        
        const existingTransaction = await Transaction.findOne({ _id });

    if (existingTransaction) {
      // Update the existing transaction
      existingTransaction.companyId = companyId;
      existingTransaction.accountHead = accountHead;
      existingTransaction.branchId = branchId;
      existingTransaction.partyId = partyId;
      existingTransaction.date = date;
      existingTransaction.autoNarration = autoNarration;
      existingTransaction.narration = narration;
      existingTransaction.amount = amount;
      existingTransaction.type = type;
      existingTransaction.clientId = clientId;

    //   // Update the invoices
    //   invoice.forEach((newInvoice) => {
    //     const existingInvoiceIndex = existingTransaction.invoice.findIndex(
    //       (inv) => inv.invoiceId === newInvoice.invoiceId
    //     );

    //     if (existingInvoiceIndex >= 0) {
    //       // If invoice exists, update it
    //       existingTransaction.invoice[existingInvoiceIndex] = {
    //         ...existingTransaction.invoice[existingInvoiceIndex]._doc,
    //         ...newInvoice
    //       };
    //     } else {
    //       // If invoice does not exist, add it as a new sub-document
    //       existingTransaction.invoice.push(newInvoice);
    //     }
    //   });

      const updatedTransaction = await existingTransaction.save();
        console.log( updatedTransaction,' updatedTransaction updatedTransaction')
      return {
        status: true,
        message: 'Transaction updated successfully',
        data: updatedTransaction
      };

    }
    } else {
      // Create a new transaction
      console.log('hello in else case')
      const newEntry = {
        companyId,
        accountHead,
        branchId,
        partyId,
        date,
        autoNarration,
        narration,
        amount,
        type,
        clientId,
        invoice
      }
      
      const newTransaction = new Transaction(newEntry);

      const savedTransaction = await newTransaction.save();
      console.log(savedTransaction,'savedTransaction---->>>>')
      return {
        status: true,
        message: 'Transaction created successfully',
        data: savedTransaction
      };
    }
  } catch (error) {
    console.error('Error in createOrUpdateTransaction:', error.message);
    return { status: false, message: error.message, statusCode: 500 };
  }
};

module.exports = createOrUpdateTransaction;
