const { players } = require('../index')

// Actualizar los puntajes de los jugadores
const update_score = (player, score) => {players[player] = Math.abs(players[player] - score); console.log(players)};

module.exports = { update_score };
