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
    const { offset, limit } = req.query;
    if (!offset || !limit) {
      return res.status(400).json({ message: 'Both offset and limit are required in the query' });
    }
    if (isNaN(offset) || isNaN(limit)) {
      return res.status(400).json({ message: 'Both offset and limit must be numbers' });
    }
    next();
  };


module.exports = {
    validateUserData,
    validateOffsetAndLimit,
    
};