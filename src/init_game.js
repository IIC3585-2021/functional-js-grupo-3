// Recibe una lista 
const init_game = (players) => {
    const players_ = {}
    players = players.map(name => players_[name] = 501);
    return players_;
};

module.exports = { init_game };
