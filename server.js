/* 
Importer les composants serveur
*/
  const express = require('express');
  const path = require('path');
  require('dotenv').config();
//

/**
Configuration du serveur
*/
  // definir les variables serveur
  const server = express();
  const port = process.env.PORT;

  // Définition du dossier static du client
  server.set( 'views', __dirname + '/www' );
  server.use( express.static(path.join(__dirname, 'www')) );
//

/*
Lancer le serveur
*/
  server.listen( port, () => console.log(`Server listening on port ${port}`) )
//