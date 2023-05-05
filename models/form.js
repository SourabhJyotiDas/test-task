const mongoose = require("mongoose");

const schema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "Enter your name"]
   },
   dateOfBirth: {
      type: String,
   },
   sex: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true
   },
   mobileNo: {
      type: Number,
   },
   idtype: {
      type: String,
      enum: ['Aadhar', 'PAN', 'Other',""],
   },
   govtId: {
      type: String,
   },
   guardian: {
      type: String,
   },
   guardianName: {
      type: String,
   },
   Email: {
      type: String,
      default:""
   },
   emergencyNo: {
      type: Number,
   },
   address: {
      type: String,
   },
   state: {
      type: String,
   },
   city: {
      type: String,
   },
   country: {
      type: String,
   },
   pincode: {
      type: Number,
   },
   occupation: {
      type: String,
   },
   religion: {
      type: String,
   },
   maritalStatus: {
      type: String,
   },
   bloodGroup: {
      type: String,
   },
   nationality: {
      type: String,
   }
});

module.exports = mongoose.model("form", schema);
