const express = require('express');
const router = express.Router();
const PetController = require('../controllers/pets.controller');

router.get('/', PetController.getAllPets);
router.get('/:id', PetController.getPetById);
router.post('/', PetController.createPet);
router.patch('/:id', PetController.updatePet);
router.delete('/:id', PetController.deletePet);

module.exports = router;
