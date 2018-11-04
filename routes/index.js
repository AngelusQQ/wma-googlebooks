const path = require('path');
const router = require('express').Router();
const bookController = require('../controllers/bookController');
const apiRoutes = require('./api');

router.route("/haha").get(bookController.findAll);

router.use('/api', apiRoutes);

router.use(function(request, response) {
  response.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
