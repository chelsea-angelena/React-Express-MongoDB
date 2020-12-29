const passport = require('passport');

module.exports = (app) => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email'],
		})
	);
	if (process.env.NODE_ENV === 'production') {
		app.get(
			'/auth/google/callback',
			passport.authenticate('google'),
			(req, res) => {
				res.redirect('/main');
			}
		);
	} else {
		app.get(
			'/auth/google/callback',
			passport.authenticate('google'),
			(req, res) => {
				res.redirect('http://localhost:3000/main');
			}
		);
	}
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
	app.get("/auth/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
