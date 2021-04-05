function enter_play(current_score, plays) {
    /* Recibe el puntaje actual del jugador y lista de 3 jugadas
    Retorna el puntaje resultante */
    const bulls = { 'DB': 50, 'SB': 25 };
    let score = 0;
    plays.forEach(play => {
        score += typeof play === 'string' ? bulls[play] : play[0] * play[1];
    });
    return Math.abs(current_score - score);
};

module.exports = { enter_play };