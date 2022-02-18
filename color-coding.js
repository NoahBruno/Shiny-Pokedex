/*=====================================
This function is used with Styles.css to add classes of specific color to
any div elemnent. see Styles.css 'root' for more info
========================================
* */

function colorTypes(result) {
    switch (result) {
        case 'normal':
            return 'Normal'
        case 'fire':
            return 'Fire'
        case 'water':
            return 'Water'
        case 'grass':
            return 'Grass'
        case 'electric':
            return 'Electric'
        case 'ice':
            return 'Ice'
        case 'fighting':
            return 'Fighting'
        case 'poison':
            return 'Poison'
        case 'ground':
            return 'Ground'
        case 'flying':
            return 'Flying'
        case 'psychic':
            return 'Psychic'
        case 'bug':
            return 'Bug'
        case 'rock':
            return 'Rock'
        case 'ghost':
            return 'Ghost'
        case 'dark':
            return 'Dark'
        case 'dragon':
            return 'Dragon'
        case 'steel':
            return 'Steel'
        case 'fairy':
            return 'Fairy'
        default :
            return 'error';

    }
}