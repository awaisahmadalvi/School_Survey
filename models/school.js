const mongoose = require('mongoose');

const imeiSchema = mongoose.Schema({
	IMEI:{
		type: String
	}
});
const Imei = module.exports = mongoose.model('imei', imeiSchema);

// school Schema
const schoolSchema = mongoose.Schema({
	IMEI:{
		type: String,
		required: true
	},
	EMIS:{
		type: String,
		required: true
	},
	RequestData:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const School = module.exports = mongoose.model('schools', schoolSchema);


// Get schools
module.exports.getSchools = (callback, limit) => {
	School.find(callback).limit(limit);
}

// Get school
module.exports.getSchoolById = (id, callback) => {
	School.findById(id, callback);
}

// Add school
module.exports.addSchool = (school, callback) => {
	Imei.findOne({IMEI:school.IMEI},function(err, data){
			if (err){
				return handleError(err);
			}
			if (data){
				School.create(school, callback);
			} else {
				school = { Error: "IMEI not found." }
				callback (err, school);
			}
	});
}

// Update school
module.exports.updateSchool = (id, school, options, callback) => {
	Imei.findOne({IMEI:school.IMEI},function(err, data){
			if (err){
				return handleError(err);
			}
			if (data){
				var query = {_id: id};
				var update = {
					IMEI: school.IMEI,
					EMIS: school.EMIS,
					RequestData: school.RequestData
				}
				School.findOneAndUpdate(query, update, options, callback);
			} else {
				school = { Error: "IMEI not found." }
				callback (err, school);
			}
	});


}

// Delete school
module.exports.removeSchool = (id, callback) => {
	var query = {_id: id};
	School.remove(query, callback);
}
