const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const routing = require('./routes/userRouter');

app.use(routing);


app.listen(port);