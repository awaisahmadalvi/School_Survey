const mongoose = require('mongoose');

// image Schema
const imageSchema = mongoose.Schema({
	IMEI:{
		type: String,
		required: true
	},
	EMIS:{
		type: String,
		required: true
	},
	ImageData:{
		type: String,
		required: true
	},
	ImageType:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Image = module.exports = mongoose.model('images', imageSchema);

// Get images
module.exports.getImages = (callback, limit) => {
	Image.find(callback).limit(limit);
}

// Add image
module.exports.addImage = (image, callback) => {
	Image.create(image, callback);
}

// Update image
module.exports.updateImage = (id, image, options, callback) => {
	var query = {_id: id};
	var update = {
		IMEI: image.IMEI,
		EMIS: image.EMIS,
		ImageData: image.ImageData,
		ImageType: image.ImageType
	}
	Image.findOneAndUpdate(query, update, options, callback);
}


// Delete image
module.exports.removeImage = (id, callback) => {
	var query = {_id: id};
	Image.remove(query, callback);
}