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
		.catch(error => res.status(400).send(error));
	},

	listSingle (req, res) {
		Contacts.findAll({
			where: {
				id: req.params.id
			}
		})
			.then(contacts => res.status(201).send(contacts))
			.catch(error => res.status(400).send(error));
	},

	listAll (req, res) {
		Contacts.findAll()
		.then(contact => res.status(200).send(contact))
		.catch(error => res.status(500).send(error));
	},

	update (req, res) {
		Contacts.findById(req.params.id)
		.then(contact => {
			contact.update(req.body, {
				fields: ['name', 'phone_number', 'city', 'state', 'photo_url', 'email']
			})
				.then(rowsChanged => res.status(202).send(contact))
				.catch(error => res.status(400).send(error));
		})
	}
};