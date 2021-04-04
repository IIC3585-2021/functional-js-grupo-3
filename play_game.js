const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function play_game(players) {
    players = init_game(players);
    winner = find_winner(players, 0)
    console.log("Gano el jugador ${winner}")
}

function find_winner(players, turn) {
        jugada = ask_for_play(play);
        ingresar_jugada(Object.keys(players)[turn], jugada);
        return is_winner([Object.keys(players)[turn]) ? Object.keys(players)[turn] : find_winner(players, Object.keys(players).length - 1 == turn ? 0 : turn++);
}

//function ask_for_play(play) {
//    rl.question('Ingresada su jugada ', (answer) => {return answer;});
//}


function is_winner(player) {
    return !players[player] ? true : false;
}