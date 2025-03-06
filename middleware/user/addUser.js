const addUser = async (req, res, next) => {
    req.body.userId = "67c944517f8fcf7d12e92f1d";
    next();
}

module.exports = addUser;