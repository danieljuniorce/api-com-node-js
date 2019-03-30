const express = require('express');

const routes = express.Router();
const ProductController = require('./controllers/ProductController')

//routa get, com requição;
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.post('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;