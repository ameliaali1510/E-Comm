const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/items');

router.get('/', itemsController.getGames);
router.get('/:id', itemsController.getGame);
router.post('/item', itemsController.createGame);
router.delete('/:id', itemsController.deleteGame);

module.exports = router;
