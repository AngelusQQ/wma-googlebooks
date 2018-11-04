const database = require('../models');

module.exports = {
  findAll: function(req, res) {
    database.Book.find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req);
    database.Book.create(req.body)
    .then(dbModel => res.send(req.body))
    .catch(err => res.status(422).json(err))
  },
  update: function(req, res) {
    database.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    database.Book.findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
