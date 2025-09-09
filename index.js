const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const userRoute = require('./routes/user');
const PORT = process.env.PORT;
const { SUCCESS } = require('./helpers/constants');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send(SUCCESS.SERVER_RUNNING);
});

app.listen(PORT, () => {
  console.log(`${SUCCESS.SERVER_RUNNING} on PORT : ${PORT}`);
});

app.use('/api/user', userRoute);

module.exports = app;