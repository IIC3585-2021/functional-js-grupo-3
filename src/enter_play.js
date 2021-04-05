function enter_play(current_score, plays) {
    /* Recibe el puntaje actual del jugador y lista de 3 jugadas
    Retorna el puntaje resultante */
    const bulls = { 'DB': 50, 'SB': 25 };
    const score = plays.map((play) => typeof play === 'string' ? bulls[play] : play[0] * play[1]).reduce((s, a) => s + a);
    return Math.abs(current_score - score);
};

module.exports = { enter_play };