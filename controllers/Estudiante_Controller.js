const { getEstudiantes } = require("../models/Estudiante")

const getEstudiantes_drive = () => {
    return getEstudiantes()
}

module.exports = { getEstudiantes_drive }