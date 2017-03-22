const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Image =require('./models/image');
School =require('./models/school');

// Connect to Mongoose
mongoose.connect('mongodb://schooladmin:bilalschooladmin@localhost/schoolSurvey');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/schools or /api/images');
});

app.get('/api/images', (req, res) => {
	Image.getImages((err, images) => {
		if(err){
			throw err;
		}
		res.json(images);
	});
});

app.post('/api/images', (req, res) => {
	var image = req.body;
	Image.addImage(Image, (err, image) => {
		if(err){
			throw err;
		}
		res.json(image);
	});
});

app.put('/api/images/:_id', (req, res) => {
	var id = req.params._id;
	var image = req.body;
	Image.updateImage(id, image, {}, (err, image) => {
		if(err){
			throw err;
		}
		res.json(image);
	});
});

app.delete('/api/images/:_id', (req, res) => {
	var id = req.params._id;
	Image.removeImage(id, (err, image) => {
		if(err){
			throw err;
		}
		res.json(image);
	});
});

app.get('/api/schools', (req, res) => {
	School.getSchools((err, schools) => {
		if(err){
			throw err;
		}
		res.json(schools);
	});
});

app.get('/api/schools/:_id', (req, res) => {
	School.getSchoolById(req.params._id, (err, school) => {
		if(err){
			throw err;
		}
		res.json(school);
	});
});

app.post('/api/schools', (req, res) => {
	var school = req.body;
	School.addSchool(school, (err, school) => {
		if(err){
			throw err;
		}
		res.json(school);
	});
});

app.put('/api/schools/:_id', (req, res) => {
	var id = req.params._id;
	var school = req.body;
	School.updateSchool(id, school, {}, (err, school) => {
		if(err){
			throw err;
		}
		res.json(school);
	});
});

app.delete('/api/schools/:_id', (req, res) => {
	var id = req.params._id;
	School.removeSchool(id, (err, school) => {
		if(err){
			throw err;
		}
		res.json(school);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
