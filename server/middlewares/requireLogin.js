module.exports = (req, res, next) => {
  if (!req.user) {
    res.status(401).send({ error: "You need to login" });
  }

  next(); // next sends request to next middleware
};
