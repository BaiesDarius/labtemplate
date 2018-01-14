var express = require('express');
var router = express.Router();
var game = require('../service/').game;

router.get('/', game.list);
router.get('/:id', game.findById);
router.post('/', game.create);
router.delete('/:id', game.delete);
module.exports = router;