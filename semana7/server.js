const express = require('express');
const app = express();

app.use(express.json());

let reportes = [];
let incidencias = [];

app.get('/reportes', (req, res) => {
  res.json(reportes);
});

app.post('/reportes', (req, res) => {

  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion 
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });

});


app.get('/incidencias', (req, res) => {
  res.json(incidencias);
});

app.post('/incidencias', (req, res) => {

  const incidencia = {
    id: incidencias.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  incidencias.push(incidencia);

  res.json({
    mensaje: "incidencia registrada",
    incidencia: incidencia	
  });
});


app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost: 3000');
});
