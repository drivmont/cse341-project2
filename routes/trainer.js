const express = require ('express');
const router = express.Router();

const trainerController = require('../controllers/trainer');

router.get('/', trainerController.getAll);

router.get('/:id', trainerController.getSingle);

router.post('/', trainerController.createTrainer);

router.put('/:id', trainerController.updateTrainer);

router.delete('/:id', trainerController.deleteTrainer);

module.exports = router;