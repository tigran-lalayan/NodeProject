const validateUserData = (req, res, next) => {
    const { username, email, phoneNumber } = req.body;
    if (!username || !email || !phoneNumber) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (typeof username !== 'string' || typeof email !== 'string' || typeof phoneNumber !== 'string') {
        return res.status(400).json({ message: 'All fields must be of type string' });
    }
    if (!email.includes('@') || !email.includes('.')) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    if (!phoneNumber.startsWith('+') || phoneNumber.length !== 12) {
        return res.status(400).json({ message: 'Invalid phone number format' });
    }
    next();
};

const validateOffsetAndLimit = (req, res, next) => {
    let offset = req.query.offset || 0;
    let limit = req.query.limit || 10;
    if (!req.query.offset && !req.query.limit) {
        next();
    } else if (!req.query.offset || !req.query.limit) {
        res.json({ message: "Both offset and limit are required in the query" });
    } else {
        offset = parseInt(offset);
        limit = parseInt(limit);
        if (isNaN(offset) || isNaN(limit)) {
            res.json({ message: "Both offset and limit have to be numbers" });
        } else {
            req.query.offset = offset;
            req.query.limit = limit;
            next();
        }
    }
};


let validateTypeProject = (req, res, next) => {
    if (req.body.project == null || req.body.purpose == null) {
        res.json({ message: "All fields are required" })
    }
    else if (req.body.project.trim() == "" || req.body.purpose.trim() == "") {
        res.json({ message: "All fields cannot be empty" })
    }
    else if (typeof req.body.project !== 'string' || typeof req.body.purpose !== 'string') {
        res.json({ message: "Both fields should be of type string" })
    }
    else {
        next();
    }
}


module.exports = {
    validateUserData,
    validateOffsetAndLimit,
    validateTypeProject
};