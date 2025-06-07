const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET_KEY

const verifyAdminToken = (req, res, next) => {
    // const header = req.headers['authorization'];
    // console.log("🔐 Auth Header:", header);

    const token = req.headers['authorization']?.split(' ')[1];
    console.log(token)

    if(!token){
        return res.status(401).json({message: 'Access denied. No token provided'})
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if(err){
            console.error("Token verification failed:", err.message);
            return res.status(403).json({message: 'Invalid credentials'})
        }
        // console.log("Token verified! User:", user);
        req.user = user;
        next();
    })
}
module.exports = verifyAdminToken;