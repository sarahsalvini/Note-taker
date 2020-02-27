var router = require('express').Router();
var noteRoutes = require('./noteRoutes');

router.use('/notes', noteRoutes)

module.exports = router
