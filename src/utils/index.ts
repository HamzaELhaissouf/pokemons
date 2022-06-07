export const upperFirstChar = (text: string) =>
    text ? (`${text.charAt(0).toUpperCase()}${text.slice(1, text.length)}`) : '';


export const returnColorDependsOnType = (type: string) => {
    switch (type) {
        case 'normal': return 'bg-gray-400';
        case 'fire': return 'bg-red-400';
        case 'water': return 'bg-blue-600';
        case 'electric': return 'bg-yellow-400';
        case 'grass': return 'bg-green-400';
        case 'ice': return 'bg-blue-300';
        case 'fighting': return 'bg-amber-600';
        case 'poison': return 'bg-violet-500';
        case 'ground': return 'bg-amber-400';
        case 'flying': return 'bg-violet-200';
        case 'physic': return 'bg-pink-500';
        case 'bug': return 'bg-green-300';
        case 'rock': return 'bg-amber-200';
        case 'ghost': return 'bg-violet-600';
        case 'dragon': return 'bg-purple-600';
        case 'dark': return 'bg-amber-800';
        case 'steel': return 'bg-gray-600';
        case 'fairy': return 'bg-pink-400';
        default: return 'bg-gray-500';
    }
}