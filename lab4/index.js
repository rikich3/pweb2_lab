const express = require('express');
const path = require('path');
const cors = require('cors');
const { request } = require('http');
const app = express();
app.use(cors);
app.use(express.static('pub'));
app.listen(8080, ()=> {
    console.log("Escuchando en el puerto 8080")
})
app.get('/', (request, response)=>{
    response.sendFile(path.resolve(__dirname, 'pub' , 'index.html'));
});
// API para mostrar los eventos
app.get('/show', (request, response)=>{

});

app.post('/', (request, response)=>{

});
app.delete('/', (request, response)=>{

});
