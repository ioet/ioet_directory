const staff = require("../models/staff.model")

module.exports = {

	/*async insertStaff (req, res) {
		res.send(JSON.stringify('Staff Server'));

		staff.create({
				name: "BOSCO"
			}, (err, staff) => {
    })

	},*/

	async getEmployeeByName (req, res) {

		staff.find({'name': {'$regex': req.params.name}}, (error, employee) => {
			res.send(JSON.stringify(employee));
    })

	},

	async getEmployeeById (req, res) {

		const id = req.params.id
		staff.find({'_id': id}, (error, employee) => {
			res.send(employee);
    })

	}

}
