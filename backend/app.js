const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(cors({origin: '*'}));

app.get('/test', (req, res) => {
    res.send('Hello from server!');
});

app.use('/api/customers', customerRoutes);

module.exports = app;
