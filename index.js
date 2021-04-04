const { play_game } = require('./src/play_game');
const prompt = require('prompt-sync')({ sigint: true });

const players = prompt('Ingrese el nombre de los jugadores: ').split(',');
play_game(players)


// play_game(['Cris', 'Maca', 'Denisse']);

// module.exports = { players }