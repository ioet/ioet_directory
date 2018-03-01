var mongoose = require('mongoose');

var StaffSchema = new mongoose.Schema({
  name: String,
  role: String,
  phone: String,
  email: String,
  birthday: Date,
  start_date: Date,
  city: String, 
  country: String,
  reportsTo: String,
	directReports: [ 
    { type: String }
	]
},{
  collection: 'staff'
})

module.exports = mongoose.model('Staff', StaffSchema);