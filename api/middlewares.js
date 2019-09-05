const { verifyGoogleToken } = require("./google-util");

module.exports = async function(req, res, next) {
  const { authorization: authHeader } = req.headers;

  if (!authHeader) return res.status(403).json();

  const [, token] = authHeader.split(" ");

  const isValid = await verifyGoogleToken(token).catch(err => {
    if (err) {
      res.status(403).json();
    }
  });

  if (isValid) return next();
};
