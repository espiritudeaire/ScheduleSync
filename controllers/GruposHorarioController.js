const { GruposHorario } = require('../models/Grupos');

exports.openSchedule = (req, res) => {
    res.render('schedule', {x:1});
}