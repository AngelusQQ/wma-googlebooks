const path = require('path');
const router = require('express').Router();

const bookController = require('../controllers/bookController');
router.route("/haha").get(bookController.findAll)

router.use(function(request, response) {
  response.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
