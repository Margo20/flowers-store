const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 5000;

const productsHandlerGet = require('./BACKEND/api-routes/products/get');
const ordersHandlerPost = require('./BACKEND/api-routes/orders/post');
const seedInitial = require('./BACKEND/helpers/seed-initial');


app.use(cors())
app.use(bodyParser.json())

// Products routes
app.get('/api/products', productsHandlerGet);

// Orders routes
app.post('/api/orders', ordersHandlerPost);


seedInitial();


app.listen(PORT, () => {
    console.log(`Running on port ${process.env.PORT || PORT}`)
})