
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gestion-tropicaux', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fournisseurRoutes = require('./routes/fournisseurs');
const produitRoutes = require('./routes/produits');
const chargeurRoutes = require('./routes/chargeurs');

app.use('/api/fournisseurs', fournisseurRoutes);
app.use('/api/produits', produitRoutes);
app.use('/api/chargeurs', chargeurRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur le port ${PORT}`));
