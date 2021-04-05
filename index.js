const { play_game } = require('./src/play_game');
const prompt = require('prompt-sync')({ sigint: true });

//Se ingresan los nombres de los jugadores
const players = prompt('Ingrese el nombre de los jugadores: ').split(',');
//Comienza el juego
play_game(players)