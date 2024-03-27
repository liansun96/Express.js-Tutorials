const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "lian") {
    req.user = { name: "lian", id: 4 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
