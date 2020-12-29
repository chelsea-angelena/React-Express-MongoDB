const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
// const multer = require('multer');
// const ImageRouter = require('./routes/api/images');
// const mongoose = require('mongoose');
const keys = require('./config/keys');

const connectDB = require('./config/db');
connectDB();

require('./models/User');
require('./middleware/passport');

const app = express();
app.use(logger('dev'));
// app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/api/auth')(app);
// require('./routes/api/posts')(app);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
app.get('/', (req, res) => {
	res.send('Hi There');
});

app.use(express.static('./client/public'));
// app.use('/image', ImageRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
