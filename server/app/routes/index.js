'use strict';
var router = require('express').Router();
module.exports = router;

// router.param('storeId', function (req, res, next) {
// 	req.storeId = req.params.storeId;
// 	return next();
// })


router.use('/tutorial', require('./tutorial'));
router.use('/members', require('./members'));
router.use('/photo', require('./photo'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});