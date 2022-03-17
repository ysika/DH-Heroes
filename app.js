const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});
// Ruta a Babbage
app.get('/babbage', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/babbage.html'))
})
// Ruta a Berners-Lee
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/berners-lee.html'))
})
// Ruta a Clarke
app.get('/clarke', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/clarke.html'))
})
// Ruta a Hamilton
app.get('/hamilton', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/hamilton.html'))
})
// Ruta a Hopper
app.get('/hopper', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/hopper.html'))
})
// Ruta a Lovelace
app.get('/lovelace', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/lovelace.html'))
})
// Ruta a Turing
app.get('/turing', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/turing.html'))
})

app.listen(3030, () => console.log("Servidor en funcionamiento"));