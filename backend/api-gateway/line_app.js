const express = require('express');
const app = express();
const liffRoute = require('./routes/liffRouter');
const port = process.env.PORT || 4000;

app.use(express.json());

// Define the /api/liff/creategame endpoint
app.use('/api/liff', liffRoute);

app.listen(port, () => console.log(`Listening on port ${port}...`));
