import React, {useEffect, useState} from "react";
import Layout from "../components/layout/Layout.tsx";
import style from "./Home.module.scss";
import iconSearch from "../assets/search.svg";
import axios from "axios";
import Card from "../components/card/Card.tsx";

export default function Home() {

    const [input, setInput] = useState("")
    const [pokemons, setPokemons] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/api/pokemon');
                setPokemons(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);


    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    console.log(pokemons)

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
                        pokemons.map(d => {
                            return (
                                <Card
                                    name={d.name}
                                />
                            )
                        })
                    }
                </section>

            </div>
            <aside>
            </aside>
        </Layout>
    )
}