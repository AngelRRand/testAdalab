import React, {useEffect, useState} from "react";
import Layout from "../components/layout/Layout.tsx";
import style from "./Home.module.scss";
import axios from "axios";
import Card from "../components/card/Card.tsx";
import {pokemon, PokemonDataType} from "../interface";
import Aside from "../components/aside/Aside.tsx";

export default function Home() {

    const [input, setInput] = useState("")
    const [view, setView] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)


    const [pokemons, setPokemons] = useState<pokemon[]>([]);
    const [pokemonsFilter, setPokemonsFilter] = useState<pokemon[]>([]);
    const [pokemonData, setPokemonData] = useState<PokemonDataType | null>(null)


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/api/pokemon');
                setPokemons(response.data);
            } catch (e) {
                console.error('Error fetching data:', e);
            }
        }

        fetchData();
    }, []);


    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        const filter = pokemons.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setPokemonsFilter(filter)
    }

    const fetchPokemonData = async (id: number) => {
        try {
            setView(false)
            const response = await axios.get(`http://localhost:3000/api/pokemon/${id}`);
            setPokemonData(response.data)
            setTimeout(() => {
                setView(true)
            }, 300);


        } catch (e) {
            console.error('Error fetching data:', e);
        }
    }

    const displayedPokemons = input ? pokemonsFilter : pokemons;

    return (
        <Layout
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        >
            <div className={style.container}>

                {/* Search input */}
                <input
                    placeholder='Search you pokemon' type="text" value={input}
                    onChange={(e) => search(e)}
                />

                {/* Container pokemons */}
                <section className={style.pokemonsContainer}>
                    {displayedPokemons.length > 0 ? (
                        displayedPokemons.slice(0, currentPage * 20).map(d => {
                            return (
                                <Card
                                    name={d.name}
                                    imageUrl={d.imageUrl}
                                    types={d.types}
                                    id={d.id}
                                    key={d.id}
                                    fetchPokemonData={fetchPokemonData}
                                />

                            )
                        })
                    ) : (
                        <h4 className={style.errorMenssage}>Pokemon not found</h4>
                    )}


                </section>

            </div>


            <Aside
                pokemonData={pokemonData}
                view={view}
                setView={setView}
                fetchPokemonData={fetchPokemonData}
            />
        </Layout>
    )
}