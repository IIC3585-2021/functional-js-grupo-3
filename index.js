const { play_game } = require('./src/play_game');
const { is_valid_players, change_input } = require('./src/check_inputs');
const prompt = require('prompt-sync')({ sigint: true });



const ask_for_players = () => {
    const players = change_input(0)(prompt('Ingrese el nombre de los jugadores: '));
    return is_valid_players(players) ? play_game(players) : (console.log("Formato inválido."), ask_for_players());
}

ask_for_players()

// play_game(['Cris', 'Maca', 'Denisse']);

// module.exports = { players }