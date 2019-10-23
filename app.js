const express = require('express');
const app = express();


// app.get('/makers/:nombre', (req, res) => {
//     if(req.params.nombre){
//         res.send(`<h1>Hola ${req.params.nombre}!</h1>`)
//     }else{
//         res.send(`<h1>Hola desconocido!</h1>`)
//   }
// })



app.get('/makers/:name', (req, res) => {
var name = req.params.name
  res.send('Hola ' + name.charAt(0).toUpperCase() + name.slice(1));
})


app.listen(3000, () => console.log('Listening on port 3000'));
