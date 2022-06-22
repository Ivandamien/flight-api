const express = require('express')
const flightRouter = require('./routes/flightRoute')

const app = express();
app.use(express.json());



app.use('/api/flights', flightRouter)

port = 5000;
app.listen(port, () => console.log("Server is running "))