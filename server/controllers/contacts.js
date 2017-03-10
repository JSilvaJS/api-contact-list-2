const Contacts = require("../models").Contacts

module.exports = {
	create (req, res) {
		Contacts.create ({
			name: req.body.name,
			phone_number: req.body.phone_number,
			city: req.body.city,
			state: req.body.state,
			photo_url: req.body.photo_url,
			email: req.body.email
		})
		.then(contact => res.status(201).send(contact))
		.catch(error => res.status(400).send(error))
	},
}