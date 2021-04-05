//const readline = require('readline');
const prompt = require('prompt-sync')({ sigint: true });
const { init_game } = require('./init_game');
const { enter_play } = require('./enter_play');
const { is_valid_plays, change_input } = require('./check_inputs');

function play_game(players) {
    players = players.split(',').map((player) =>  player[0].toUpperCase() + player.slice(1).toLowerCase() )   
    players = init_game(players);
    winner = find_winner(players, 0)
    console.log(`***** Gano el jugador ${winner} *****`)
}

const ask_for_plays = (name) => {
    const play = change_input(1)(prompt(`>> Turno de ${name}. Ingrese la jugada: `));
    return is_valid_plays(play) ? play : (console.log("Formato inválido."), ask_for_plays(name));
}

function find_winner(players, turn) {
    const name = Object.keys(players)[turn];
    const jugada = ask_for_plays(name)
    const score = enter_play(players[name], JSON.parse("[" + jugada + "]"));
    players[name] = score;
    console.log(`${name} queda con ${score} puntos.\n`)
    return is_winner(name, players) ? name : find_winner(players, Object.keys(players).length - 1 === turn ? 0 : turn + 1);
}

function is_winner(player, players) {
    return players[player] === 0 ? true : false;
}

module.exports = { play_game };