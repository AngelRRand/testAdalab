export interface pokemon {
    name: string;
    imageUrl: string;
    types: string[];
    id: number;
}

export interface pokemonCard {
    name: string;
    imageUrl: string;
    types: string[];
    id: number;
    fetchPokemonData: (id: number) => void;
}

export interface asideType {
    pokemonData: PokemonDataType | null;
}

export interface PokemonDataType {
    name: string;
    types: string[];
    imageUrl: string;
    id: string;
    description: string;
    data: {
        height: string;
        weight: string;
    };
    abilities: string[];
    stats: number[];
    evolution: {
        levels: number[];
        evolutions: {
            name: string;
            imageUrl: string;
            id: number;
        }[];
    };
}