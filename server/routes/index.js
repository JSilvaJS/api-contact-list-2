// Require your controllers here
const ContactsController = require("../controllers/contacts")

module.exports = (app) => {
  // Add your routes here
  app.post('/contacts', ContactsController.create);
};
