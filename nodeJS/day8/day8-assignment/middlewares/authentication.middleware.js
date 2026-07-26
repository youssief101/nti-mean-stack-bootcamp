const jwt = require('jsonwebtoken');
const {promisify} = require('util');

exports.auth = async (req, res, next) => {
    const {authorization} = req.headers;
    if (!authorization) {
	return res.status(401).json({message: "You must provide Authorization token"});
    }

    try {
	const decoded = await promisify(jwt.verify)(authorization, process.env.JWT_SECRET);
	req.userId = decoded.id;
	req.role = decoded.role;
	next();
    } catch (error) {
	res.status(401).json({message: "Invalid or expired token"});
    }
};


exports.restrictTo = (...roles) => {
    return (req, res, next) => {
	if (!roles.includes(req.role)) {
	    return res.status(403).json({message: "You're not authorized to access this role"});
	}
	next();
    };
};

