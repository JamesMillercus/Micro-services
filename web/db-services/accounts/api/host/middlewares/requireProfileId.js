module.exports = (req, res, next) => {
	if(!req.body.profileID) {
		return res.status(401).send({ error: 'You must provide valid profile id!' });
	}
	next();
};