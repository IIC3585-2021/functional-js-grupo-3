const { play_game } = require('./src/play_game');
const { is_valid_players, change_input } = require('./src/check_inputs');
const prompt = require('prompt-sync')({ sigint: true });

const start_game = () => {
    /* Pregunta por los jugadores
    Retorna la función que inicializa el juego si los inputs son válidos, si no vuelve a preguntar. */
    const players = change_input(0)(prompt('Ingrese el nombre de los jugadores: '));
    return is_valid_players(players) ? play_game(players) : (console.log("Formato inválido."), start_game());
}

start_game();