const compose = (f,g) => (x) => f(g(x));

const change_input = (type) => {
    /* Recibe el tipo de input
    Los tipos definidos son {0: nombres jugadores, 1: jugadas} */
    return (input) => {
        /* Recibe el input
        Retorna el input sin espacios, y en caso de ser jugada con mayúscula. */
        input = input.replace(/ /g, "");
        return type === 0 ? input : input.toUpperCase().replace(/'/g, "\"");
    }
};

// Verificación de inputs de jugadas con regex. 
const check_input_list = (play) => { return play = play.replace(/\[[123],[0-9]{1,2}\]/g, "") };
const check_input_string = (play) => { 
    return play = play.replace(/"[DS]B"/g, "").replace(/[Nn]ull/g, "") 
};

// Check cantidad de inputs entregados en las jugadas.
const check_num_plays = (play) => { return ',,' === play ? true : false  };

// Verificación de inputs de jugadores.
const check_name = (names) => { return names = names.replace(/[a-zA-Z]*/g, "") };

// Check cantidad de inputs en los jugadores.
const check_num_players = (players) => { return players.match(/,/) ? true : false };
// tienen ser más de dos y solo ser letras.


//Composición para revisar inputs.
const is_valid_plays = compose(check_num_plays,compose(check_input_list, check_input_string));
const is_valid_players = compose(check_num_players, check_name);

module.exports = { is_valid_plays, is_valid_players, change_input };

