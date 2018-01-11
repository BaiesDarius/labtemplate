var express = require('express');
var router = express.Router();
var user = require('../service/').user;

router.get('/', user.list);
router.get('/:id', user.findById);
router.post('/email', user.findByEmail)
router.post('/', user.create);
// router.put('/:id',user.update);
router.delete('/:id', user.delete);
module.exports = router;