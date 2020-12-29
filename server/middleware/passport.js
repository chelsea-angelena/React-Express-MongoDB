const passport = require('passport');
const mongoose = require('mongoose');
require('../models/User');
const User = mongoose.model('users');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});
passport.serializeUser((user, done) => {
	done(null, user.id);
});
passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.clientID,
			clientSecret: keys.client_secret,
			callbackURL: '/auth/google/callback',
			passReqToCallback: true,
			proxy: true,
		},
		function (request, accessToken, refreshToken, profile, done) {
			User.findOne({ googleId: profile.id }, function (err, user) {
				return done(err, user);
			});
		}
	)
);
