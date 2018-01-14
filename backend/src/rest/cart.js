var express = require('express');
var router = express.Router();
var cart = require('../service/').cart;

router.get('/', cart.list);
router.get('/:id', cart.findById);
router.post('/', cart.create);
router.delete('/:id', cart.delete);
module.exports = router;