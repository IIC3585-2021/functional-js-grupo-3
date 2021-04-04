const { init_game } = require('./src/init_game');

//play_game()
players = init_game(["Maca", "Denisse", "Cris"])
console.log(players)

module.exports = { players }