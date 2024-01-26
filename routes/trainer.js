const express = require ('express');
const router = express.Router();

const trainerController = require('../controllers/trainer');

router.get('/', trainerController.getAll);

router.get('/:id', trainerController.getSingle);

router.post('/', validation.saveTrainer, trainerController.createTrainer);

router.put('/:id', validation.saveTrainer, trainerController.updateTrainer);

router.delete('/:id', trainerController.deleteTrainer);

module.exports = router;