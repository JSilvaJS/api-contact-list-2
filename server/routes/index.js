// Require your controllers here
const ContactsController = require("../controllers/contacts")

module.exports = (app) => {
  // Add your routes here
  app.post('/contacts', ContactsController.create);
  app.get('/contacts', ContactsController.listAll);
  app.get('/contacts/:id', ContactsController.listSingle);
  app.put('/contacts/:id', ContactsController.update);
};

// https://glacial-chamber-70166.herokuapp.com/  LIVE SERVER to use with POSTMAN, $http

//https://git.heroku.com/glacial-chamber-70166.git GIT REPO for the server on Heroku