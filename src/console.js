var readline = require('readline'); //Modulo que permite leer info de la consola. Fuente: https://node.readthedocs.io/en/latest/api/readline/
//const { update_score } = require('./update_score');


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
const ask_players = () => {
    rl.question("Ingrese los jugadores: ", (name) => {
        //Recibo los nombres y los mando a alguna parte
        console.log(name)
        rl.close();
})};

module.exports = {ask_players};
*/