const fs = require("fs");
const archivo = "./data/estudiantes.json"


class Estudiante {
    #id;
    #nombre;
    #telefono;
    #id_academia;

    constructor(id, nombre, telefono, id_academia) {
        this.#id = id;
        this.#nombre = nombre;
        this.#telefono = telefono;
        this.#id_academia = id_academia;
    }

    getId() {
        return this.#id
    }

    getNombre() {
        return this.#nombre
    }

    getTelefono() {
        return this.#telefono
    }

    getIdAcademia() {
        return this.#id_academia
    }

}

class ListaEstudiantes {
    estudiantes;
    constructor() {
        this.estudiantes = this.getAll()
    }

    getAll() {
        try {
            let datos = fs.readFileSync(archivo, 'utf-8');
            datos = JSON.parse(datos)
            return datos;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    getByAcademia(academia) {
        return this.estudiantes.filter(estudiante => estudiante.id_academia == academia)
    }
}



const getEstudiantes = () => {
    let l = new ListaEstudiantes()
    return l;
}

module.exports = { getEstudiantes };