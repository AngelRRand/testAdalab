export const colors = (type: string) => {
    let color = ''
    switch (type) {
        case 'grass':
            color = '#82FA58';
            break;
        case 'poison':
            color = '#AC58FA';
            break;
        case 'fire':
            color = '#FA5858';
            break;
        case 'flying':
            color = '#c492fa';
            break;
        case 'water':
            color = '#5899fa';
            break;
        case 'bug':
            color = '#C8FE2E';
            break;
        case 'normal':
            color = '#BDBDBD';
            break;
        case 'electric':
            color = '#F4FA58';
            break;
        case 'fairy':
            color = '#ff97ef';
            break;
        case 'fighting':
            color = '#ff3d3d';
            break;
        case 'psychic':
            color = '#fe2eb5';
            break;
        case 'ground':
            color = '#FE9A2E';
            break;
        case 'rock':
            color = '#be5a30';
            break;
        case 'steel':
            color = '#707070';
            break;
        case 'ice':
            color = '#6dd6ff';
            break;
        case 'ghost':
            color = '#4f4f4f';
            break;
        case 'dragon':
            color = '#1e4cc7';
            break;
        case 'dark':
            color = 'rgba(48,58,49,0.51)';
            break;
        default:
            break;
    }
    return color
}
