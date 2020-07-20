const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('[SERVER] Server is running on localhost:3333'));
