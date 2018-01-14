var express = require('express');
var router = express.Router();
var userrole = require('../service/').userrole

router.get('/', userrole.list);
router.get('/:id', userrole.findById);
router.post('/', userrole.create);
router.delete('/:id', userrole.delete);
module.exports = router;