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


export const statsName = (index: number) => {
    let data: { text: string, color: string } = {text: '', color: ''}
    switch (index) {
        case 0:
            data = {text: 'HP', color: '#FA5858'};
            break;
        case 1:
            data = {text: 'ATK', color: '#fa9158'};
            break;
        case 2:
            data = {text: 'DEF', color: '#fadf58'};
            break;
        case 3:
            data = {text: 'SpA', color: '#58fafa'};
            break;
        case 4:
            data = {text: 'SpD', color: '#86fa58'};
            break;
        case 5:
            data = {text: 'SPD', color: '#cc58fa'};
            break;
        case 6:
            data = {text: 'TOT', color: '#589efa'};
            break;
        default:
            break;
    }
    return data
}


export const upperCaseText = (text: string) => {
    if (text) {
        return text.charAt(0).toUpperCase() + text.slice(1)

    }
}