const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const horarioRouter = require('./routes/HorarioRoutes');
const port = 3000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/horario', horarioRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log("Audiens");

});


/******************************************************** */
/*
let datos = {
    usuario: {
        nombre: "Juan",
        edad: 30,
        direccion: {
            ciudad: "Madrid",
            pais: "España"
        }
    },
    compras: [
        { producto: "Laptop", precio: 1200 },
        { producto: "Teléfono", precio: 800 }
    ]
};

function recorrerJSON(obj, nivel) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            console.log(" ".repeat(nivel), key, ":");
            recorrerJSON(obj[key], nivel + 1);
        } else {
            console.log(" ".repeat(nivel), key, ":", obj[key]);
        }
    }
}
*/
/*recorrerJSON(datos, 0);

let filtro = datos.compras.filter(compra => compra.precio > 1000);
console.log(filtro);*/

/******************************************************** */