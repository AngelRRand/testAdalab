import React, {useState} from "react";
import Layout from "../components/layout/Layout.tsx";
import style from "./Home.module.scss";
import iconSearch from "../assets/search.svg";

export default function Home() {

    const [input, setInput] = useState("")


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

                </section>

            </div>
            <aside>
            </aside>
        </Layout>
    )
}