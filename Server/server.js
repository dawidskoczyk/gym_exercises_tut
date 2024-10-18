const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/autRoute');

const app = express();
//middlewares
app.use(cors());
app.use(express.json());

//route

app.use('/api/auth', authRouter);

//mongoDB conncetion
mongoose
  .connect('mongodb://127.0.0.1:27017/authentication')
  .then(() => console.log('Connected to MongoDB!'))
  .catch((error) => console.error('Failed to connect to MongoDB', error));

app.use((err, res, req, next) =>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
}).on('error', (error) => {
  console.error('Failed to start server:', error);
});