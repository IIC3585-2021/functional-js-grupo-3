const init_game = (players) => {
    /* Recibe una lista con los nombres de los jugadores
    Retorna un diccionario con los jugadores y sus puntajes iniciales */
    const players_ = {};
    players = players.map(name => players_[name] = 501);
    return players_;
};

module.exports = { init_game };
