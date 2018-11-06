const database = require('../models');

module.exports = {
  findAll: function(req, res) {
    database.Book.find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    database.Book.create(req.body)
    .then(dbModel => res.redirect('/saved'))
    .catch(err => res.status(422).json(err))
  },
  update: function(req, res) {
    database.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log(req.body);
    database.Book.findById({ _id: req.body._id})
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
