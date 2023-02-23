const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const flexMessageRoutes = require('./routers/messageRouters/sendflexRoute');
const liffRoute = require('./routers/liffRouters/liffRouter')
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/webhook', flexMessageRoutes);

app.use('/api/liff', liffRoute);

app.listen(port, () => console.log(`App listening on port ${port}`));


