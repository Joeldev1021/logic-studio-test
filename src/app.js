const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { errorMiddleware } = require('./middleware/errorMiddleware');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// export server conect database
require('./db');


app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// routes
app.use('/api', require('./routes/index.routes'))
app.use(errorMiddleware);
// listen
app.listen(PORT, () => {
    console.log(`app listening at ${PORT} 🔥`);
});

module.exports = app 