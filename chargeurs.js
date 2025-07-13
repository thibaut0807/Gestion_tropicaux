
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const chargeurSchema = new mongoose.Schema({
  nom: String,
  telephone: String,
  vehicule: String,
  immatriculation: String,
  capacite: String,
  disponible: Boolean
});
const Chargeur = mongoose.model('Chargeur', chargeurSchema);

router.get('/', async (req, res) => {
  const chargeurs = await Chargeur.find();
  res.json(chargeurs);
});

router.post('/', async (req, res) => {
  const nouveau = new Chargeur(req.body);
  await nouveau.save();
  res.json(nouveau);
});

module.exports = router;
