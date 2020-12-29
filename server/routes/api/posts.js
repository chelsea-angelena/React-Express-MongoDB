const express = require('express');
// const { check, validationResult } = require('express-validator');
const auth = require('./auth');
// const router = express.Router();
// const mongoose = require('mongoose');
const Post = require('../../models/Posts');
const User = require('../models/User');
// var Schema = mongoose.Schema;
const multer = require('multer');
var fs = require('fs');
const { db } = require('../../models/Posts');
// const upload = multer({ dest: __dirname + '/uploads/images' });

module.exports = (app) => {
	app.post('/api/posts', (req, res) => {
		const myData = new Post(req.body);
		myData
			.save()
			.then((item) => {
				res.send('saved');
			})
			.catch((err) => {
				res.status(400).send('unable to save');
			});
		console.log(req.body);
	});

	app.get('/api/posts', (req, res) => {
		db.
		res.send('');
	});
};
