import jwt from "jsonwebtoken";

const verifyToken = (req,res,next) => {

  const { token } = req.headers;
  
  if (token) {

    jwt.verify(token, process.env.tsec, function(err, verified) {
        if (err) {
            return res.status(401).json({"error": true, "message": 'Unauthorized! Login and try again.' });
        }
      req.verified = verified;
      next();
    });

  } else {

    return res.status(403).send({
        "error": true,
        "message": 'Please login'
    });

  }

}

export default verifyToken;