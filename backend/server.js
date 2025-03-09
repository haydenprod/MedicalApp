const app = require('./app');
const http = require('http');

//Demmarrage du serveur 
const PORT = process.env.PORT || 5000; // Utiliser le port défini dans les variables d'environnement ou 5000 par défaut
const server = http.createServer(app); // Créer un serveur HTTP avec Express

server.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});