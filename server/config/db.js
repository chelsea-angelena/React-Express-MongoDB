const mongoose = require('mongoose');
const keys = require('./keys');
const mongoPass = keys.mongoPass;
const dbName = keys.mongoDBName;
const uri=`mongodb+srv://chelseaangelena:${mongoPass}@cluster0.abinf.mongodb.net/${dbName}?retryWrites=true&w=majority`;


const connectDB = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
