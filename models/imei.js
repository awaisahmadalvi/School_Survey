const mongoose = require('mongoose');

// imei Schema
const imeiSchema = mongoose.Schema({
	IMEI:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Imei = module.exports = mongoose.model('imeis', imeiSchema);

// Get imeis
module.exports.getImeis = (callback, limit) => {
	Imei.find(callback).limit(limit);
}

// Add imei
module.exports.addImei = (imei, callback) => {
	Imei.create(imei, callback);
}
