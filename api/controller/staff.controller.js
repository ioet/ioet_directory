const staff = require("../models/staff.model")

module.exports = {

	async insertStaff (req, res) {
		res.send(JSON.stringify('Staff Server'));

		staff.create({
				name: "BOSCO"
			}, (err, staff) => {
    })

	},

	async getEmployee (req, res) {

		staff.find({'name': {'$regex': req.params.name}}, (error, employee) => {
			console.log(employee)
			res.send(JSON.stringify(employee));

    })

		/*{
	    "name": "Bosco",
	    "role": "Developer",
	    "phone": "0990045912",
	    "email": "bandrade@ioet.com",        
	    "city": "Guayaquil", 
	    "country": "Ecuador",
	    "reportsTo": "",
	    "directReports": []
		}*/

	}

}
