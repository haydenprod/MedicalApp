//Dependances
const express = require('express');
const db = require('./config/db'); 


const app = express();

//Middlewares
app.use(express.json()); // Pour parser les requêtes en JSON
app.use(express.urlencoded({ extended: true })); // Pour parser les requêtes URL-encoded

// routes
const patientRoutes = require('./routes/patientRoutes');
const medecinRoutes = require('./routes/medecinRoutes');
const rendezVousRoutes = require('./routes/rendezVousRoutes');


app.use('/api/patients', patientRoutes);
app.use('/api/medecins', medecinRoutes);
app.use('/api/rendezvous', rendezVousRoutes);

// gestion d'erreurs 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

//gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erreur serveur' });
});


module.exports = app;