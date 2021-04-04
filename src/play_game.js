//const readline = require('readline');
const prompt = require('prompt-sync')({ sigint: true });
const { init_game } = require('./init_game');
const { enter_play } = require('./enter_play');

function play_game(players) {
    players = init_game(players);
    winner = find_winner(players, 0)
    console.log(`***** Gano el jugador ${winner} *****`)
}

function find_winner(players, turn) {
    const name = Object.keys(players)[turn];
    const jugada = prompt(`>> Turno de ${name}. Ingrese la jugada: `);
    const score = enter_play(players[name], JSON.parse("[" + jugada + "]"));
    players[name] = score;
    console.log(`${name} queda con ${score} puntos.\n`)
    return is_winner(name, players) ? name : find_winner(players, Object.keys(players).length - 1 === turn ? 0 : turn + 1);
}

function is_winner(player, players) {
    return players[player] === 0 ? true : false;
}

module.exports = { play_game };