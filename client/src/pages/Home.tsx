import React, {useEffect, useState} from "react";
import Layout from "../components/layout/Layout.tsx";
import style from "./Home.module.scss";
import iconSearch from "../assets/search.svg";
import axios from "axios";
import Card from "../components/card/Card.tsx";
import {pokemon} from "../interface";
import Aside from "../components/aside/Aside.tsx";

export default function Home() {

    const [input, setInput] = useState("")
    const [loader, setLoader] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)


    const [pokemons, setPokemons] = useState<pokemon[]>([]);
    const [pokemonData, setPokemonData] = useState({})


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
    }


    return (
        <Layout>
            <div className={style.container}>

                {/* Search input */}
                <div className={style.input}>
                    <input
                        placeholder='Search you pokemon' type="text" value={input}
                        onChange={(e) => search(e)}
                    />
                    <button>
                        <img src={iconSearch} alt='search icon' width={30} height={30}/>
                    </button>
                </div>

                {/* Container pokemons */}
                <section className={style.pokemonsContainer}>
                    {
                        pokemons.slice(0, currentPage * 20).map(d => {
                            return (
                                <Card
                                    name={d.name}
                                    imageUrl={d.imageUrl}
                                    types={d.types}
                                    id={d.id}
                                    key={d.id}
                                />
                            )
                        })
                    }
                </section>

            </div>


            <Aside

            />
        </Layout>
    )
}