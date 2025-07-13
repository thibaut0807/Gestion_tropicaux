
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
  nom: String,
  categorie: String,
  prix_achat: Number,
  prix_vente: Number,
  unite: String
});
const Produit = mongoose.model('Produit', produitSchema);

router.get('/', async (req, res) => {
  const produits = await Produit.find();
  res.json(produits);
});

router.post('/', async (req, res) => {
  const nouveau = new Produit(req.body);
  await nouveau.save();
  res.json(nouveau);
});

module.exports = router;
