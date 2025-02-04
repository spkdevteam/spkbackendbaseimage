const mongoose = require('mongoose');

// Define the Invoice sub-schema
const invoiceSchema = new mongoose.Schema({
    invoiceId: { type: String, required: true },
    displayId: { type: String, required: true },
    amount: { type: Number, required: true }
});

// Define the main Transaction schema
const transactionSchema = new mongoose.Schema({
    transactionId:{type: String},
    companyId: { type: String, required: true },
    accountHead: { type: String, required: true },
    branchId: { type: String, required: true },
    partyId: { type: String, required: true },
    date: { type: Date, required: true },
    autoNarration: { type: String,  },
    narration: { type: String },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['credit', 'debit'], required: true },
    clientId: { type: String, default: '' },
    invoice: [invoiceSchema]  
},{ timestamps: true });

// Create the model
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = transactionSchema;