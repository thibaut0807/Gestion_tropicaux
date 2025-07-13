
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const fournisseurSchema = new mongoose.Schema({
  nom: String,
  adresse: String,
  telephone: String,
  email: String
});
const Fournisseur = mongoose.model('Fournisseur', fournisseurSchema);

router.get('/', async (req, res) => {
  const fournisseurs = await Fournisseur.find();
  res.json(fournisseurs);
});

router.post('/', async (req, res) => {
  const nouveau = new Fournisseur(req.body);
  await nouveau.save();
  res.json(nouveau);
});

module.exports = router;
