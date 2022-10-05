const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('conect db to mongodb'))
    .catch(err => console.log(err));

process.on('uncaughtException', async () => {
    mongoose.disconnect();
});

module.exports = mongoose;