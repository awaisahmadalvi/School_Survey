const mongoose = require('mongoose');

const imeiSchema = mongoose.Schema({
	IMEI:{
		type: String
	}
});
const Imei = module.exports = mongoose.model('imei', imeiSchema);

// school Schema
const schoolSchema = mongoose.Schema({
	create_date:{
		type: Date,
		default: Date.now
	},
	imei:{
		type: String,
		//validate: [//,""],
		required: true
	},
	emis:{
		type: String,
		validate: [/^([0-9]){8}$/, "EMIS Number Should be 8 digits long"],
		required: true
	},
	locationLong:{
		type:String,
		//validate: [//,""],
		required:true
	},
	locationLat:{
		type:String,
		//validate: [//,""],
		required:true
	},
	timestamp:{
		type:String,
		//validate: [//,""],
		required:true
	},
	schoolNameandAddress:{
		type:String,
		validate: [/^([\x20A-Za-z0-9_-]){6,30}$/, "School Name with Address should contain (A-Z a-z 0-9 _ -) and it should be (6-50) characters long"],
		required:true
	},
	headTeacher:{
		type:String,
		validate: [/^([\x20A-Za-z]){6,30}$/,"Name of Head Teacher should contain (A-Z a-z) and it should be (6-30) characters long"],
		required:true
	},
	headTeacherContact:{
		type:String,
		validate: [/^([0-9]){11,11}$/,"Contact No of Head Teacher should contain (0-9) and it should be 11 characters long"],
		required:true
	},
	union:{
		type:String,
		validate: [/^([\x20A-Za-z0-9]){1,30}$/,"Union Council should contain (A-Z a-z 0-9) and it should be (1-30) characters long"],
		required:true
	},
	tehsil:{
		type:String,
		validate: [/^([\x20A-Za-z0-9]){1,30}$/,"Tehsil should contain (A-Z a-z 0-9) and it should be (1-30) characters long"],
		required:true
	},
	district:{
		type:String,
		validate: [/^([\x20A-Za-z0-9]){1,30}$/,"District should contain (A-Z a-z 0-9) and it should be (1-30) characters long"],
		required:true
	},
	noOfClassrooms:{
		type:Number,
		validate: [/^([0-9]*)$/,"No of Class Rooms should contain (0-9) and it should be 0 or more than 0"],
		required:true
	},
	roofType:{
		type:Number,
		validate: [/^([0-4])$/,"Roof Type is not Correct"],
		required:true
	},
	roofTypeOther:{
		type:String,
		validate: [/^([\x20A-Za-z0-9]){1,30}/,"Roof Type Other should contain (A-Z a-z 0-9) and it should be (1-30) characters long"]
	},
	roofCondition:{
		type:Number,
		validate: [/^([0-1])$/,"Roof Condition is not Correct"],
		required:true
	},
	roofInclination:{
		type:Number,
		validate: [/^([0-3])$/,"Roof Inclination is not Correct"],
		required:true
	},
	roofInclinationOther:{
		validate: [/^([\x20A-Za-z0-9]){1,30}$/,"Roof Inclination Other should contain (A-Z a-z 0-9) and it should be (1-30) characters long"],
		type:String
	},
	roofShading:{
		type:Number,
		validate: [/^([0-3])$/,"Roof Shading is not Correct"],
		required:true
	},
	roofShadingOther:{
		validate: [/^([\x20A-Za-z0-9]){1,30}$/,"Roof Shading Other should contain (A-Z a-z 0-9) and it should be (1-30) characters long"],
		type:String
	},
	water:{
		type:Number,
		validate: [/^([0-3])$/,"water Availability is not Correct"],
		required:true
	},
	waterOther:{
		validate: [/^([\x20A-Za-z0-9]){1,30}$/,"Water Availability Other should contain (A-Z a-z 0-9) and it should be (1-30) characters long"],
		type:String
	},
	roofArea:{
		type:String,
		validate: [/^([0-9]*)$/,"Roof Area should contain (0-9) and it should be more than 0"],
		required:true
	},
	buildingAge:{
		type:String,
		validate: [/^([0-9]*)$/,"Building Age should contain (0-9) and it should be more than 0"],
		required:true
	},
	electr:{
		type:Number,
		validate: [/^([0-1])$/,"Electricity Availability is not Correct"],
		required:true
	},
	electrConnection:{
		validate: [/^([0-2])$/,"Electricity Connection is not Correct"],
		type:Number
	},
	electrConnectionsOther:{
		validate: [/^([0-9]*)$/,"Electricity Connection Other should contain (0-9) and it should be more than 2"],
		type:String
	},
	electrConnectionThreePhase:{
		validate: [/^([0-9]*)$/,"Electricity Connection Three Phase should contain (0-9) and it shouldn't be greater than No of Electricity Connections"],
		type:String
	},
	transformerCapacity:{
		validate: [/^([0-9]*)$/,"Transformer Capacity should contain (0-9) and it should be Greater than 0"],
		type:String
	},
	wiringCondition:{
		validate: [/^([0-1])$/,"Wiring Condition is not Correct"],
		type:Number
	},
	loadShading:{
		validate: [/^([0-9]*)$/,"Load Shading should contain (0-9) and it should be 0 or less than 24"],
		type:String
	},
	fans:{
		validate: [/^([0-9]*)$/,"Fans should contain (0-9) and it should be 0 or greater"],
		type:String
	},
	lights:{
		validate: [/^([0-9]*)$/,"Lights should contain (0-9) and it should be 0 or greater"],
		type:String
	},
	landline:{
		type:Number,
		validate: [/^([0-1])$/,"Telephone Land Line Connection/DSL is not Correct"],
		required:true
	},
	cellphoneCoverage:{
		type:String,
		required:true
	},
	otherEquipment:{
		type:String
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
	Imei.findOne({IMEI:school.imei},function(err, data){
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
	Imei.findOne({IMEI:school.imei},function(err, data){
			if (err){
				return handleError(err);
			}
			if (data){
				var query = {_id: id};
				/*var update = {
					IMEI: school.IMEI,
					EMIS: school.EMIS,
					RequestData: school.RequestData
				}*/
				School.findOneAndUpdate(query, /*update*/school, options, callback);
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
