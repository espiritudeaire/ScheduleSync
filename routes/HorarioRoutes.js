const express = require('express');
const router = express.Router();
const controlador = require('../controllers/GruposHorarioController');

router.get('/horario_general', controlador.openSchedule);

module.exports = router;