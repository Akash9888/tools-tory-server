const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ message: "unauthorized access" });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
            return res.status(403).send({ message: "Forbiden access" });
        }
        console.log("decode: ", decode);
        next();
    });
};
module.exports = verifyJwt;
