const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    subjectLine: String,
    body: String,
    date: Date
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;