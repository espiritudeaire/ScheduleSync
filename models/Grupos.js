const fs = require("fs");
const archivo = "./data/grupos_horarios.json";
const { getEstudiantes } = require("./Estudiante");

class GruposHorario {
    lista;
    constructor() {
        this.lista = this.getDatos();
    }

    getDatos() {
        try {
            let datos = fs.readFileSync(archivo, 'utf-8');
            datos = JSON.parse(datos);
            return datos;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    getLista() {
        return this.lista;
    }

    printLista() {
        console.log("------------");

        let dias_array = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

        for (let dia of dias_array) {
            let filtroDia = this.filtrarPorAcademiaYDia(2, dia)

            if (filtroDia.length > 0) {
                console.log(JSON.stringify(filtroDia, null, 2));
            } else {
                console.log(`El día ${dia} no tiene grupos`);
            }
        }
        console.log("------------");
    }

    filtrarPorDia(dia) {
        let data = this.lista;
        return data
            .filter(grupo => grupo.dia == dia)
            .map(d => ({
                ...d,
                horarios: d.horarios.sort((a, b) => this.horaToMinutos(a.horaInicio) - this.horaToMinutos(b.horaInicio))
            }));
    }

    filtrarPorAcademiaYDia(id_academia, dia) {
        let data = this.lista;
        return data
            .filter(d => d.dia == dia)
            .map(d => ({
                ...d,
                horarios: d.horarios.filter(e => e.academia_id == id_academia).sort((a, b) => this.horaToMinutos(a.horaInicio) - this.horaToMinutos(b.horaInicio))
            }))
    }

    horaToMinutos(hora) {
        let [h, m] = hora.split(":");
        return parseInt(h) * 60 + parseInt(m);
    }

    recorrerJSON(obj, nivel) {
        for (let key in obj) {
            if (typeof obj[key] === "object") {
                console.log(" ".repeat(nivel), key, ":");
                this.recorrerJSON(obj[key], nivel + 1);
            } else {
                console.log(" ".repeat(nivel), key, ":", obj[key]);
            }
        }
    }
}

module.exports = { GruposHorario };