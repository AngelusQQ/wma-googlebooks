const path = require('path');
const router = require('express').Router();

router.use(function(request, response) {
  response.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
