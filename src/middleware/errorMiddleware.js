const errorMiddleware = (err, req, res, next) => {
    console.log(err.message);
    res.status(err.status || 500).send(err.message);
    next();
};

module.exports = { errorMiddleware };