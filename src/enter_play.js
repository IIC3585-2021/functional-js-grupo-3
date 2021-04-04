function enter_play(player, plays) {
    // recibe nombre del jugador y lista de 3 plays
    const bulls = { 'DB': 50, 'SB': 25 };
    let score = 0;
    plays.forEach(play => {
        score += typeof play === 'string' ? bulls[play] : play[0] * play[1];
    });
    update_score(player, score);
};