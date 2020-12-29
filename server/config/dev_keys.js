// DO NOT COMMIT
require('dotenv').config();

module.exports = {
	clientID: process.env.HEROKU_GOOGLE_CLIENT_ID,
	client_secret: process.env.HEROKU_GOOGLE_CLIENT_SECRET,
	mongoPass: process.env.MONGO_PASS_DEV,
	mongoDBName: process.env.DB_NAME_DEV,
	cookieKey: process.env.COOKIE_KEY,
	jwtSecret: 'sauidhauhds',
};



// MONGO_URI=`mongodb+srv://chelseaAngelena:${MONGO_PASS_DEV}@cluster0.9wf86.mongodb.net/${DB_NAME_DEV}?retryWrites=true&w=majority`;


// HEROKU_GOOGLE_CLIENT_ID
// HEROKU_GOOGLE_CLIENT_SECRET
// COOKIE_KEY
