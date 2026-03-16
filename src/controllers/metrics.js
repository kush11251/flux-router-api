const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.send({ message: 'Metrics endpoint' }));
module.exports = router;