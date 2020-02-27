var router = require('express').Router();
var htmlRoutes = require('./htmlRoutes');
var apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes)
router.use(htmlRoutes)

module.exports = router