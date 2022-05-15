const { Router } = require('express');
 const Characters = require("./characters")
 const Episodes = require("./episodes")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers

  router.use('/characters', Characters);
 
  router.use('/episodes', Episodes);


module.exports = router;
