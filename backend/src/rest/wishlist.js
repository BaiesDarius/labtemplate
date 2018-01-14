var express = require('express');
var router = express.Router();
var wishlist = require('../service/').wishlist;

router.get('/', wishlist.list);
router.get('/:id', wishlist.findById);
router.post('/', wishlist.create);
router.delete('/:id', wishlist.delete);
module.exports = router;