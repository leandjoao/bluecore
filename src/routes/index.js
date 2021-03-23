const { Router } = require('express');
const routes = Router();

const ContactsController = require('../controllers/ContactsController');

routes.get('/', ContactsController.index);
routes.post('/store', ContactsController.store);

module.exports = routes;