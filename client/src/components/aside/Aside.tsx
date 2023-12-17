import style from "./Aside.module.scss"
import {asideType} from "../../interface";
import closeIcon from "../../assets/cancel.svg"
import {colors, statsName, upperCaseText} from "../../helper";

export default function Aside({pokemonData, view, setView, fetchPokemonData}: asideType) {


    return (
        <aside className={`${style.container} ${view ? style.asideDetailHidden : ''}`}>
            <button
                className={style.cancel}
                onClick={() => {
                    setView(false)
                }}>
                <img
                    src={closeIcon}
                    alt={"Icon"}
                    width={25}
                    height={25}
                />
            </button>

            <div className={style.containerImg}>
                <img
                    className={style.imgTop}
                    src={pokemonData?.imageUrl}
                    alt={'pokemonIMG'}
                    width={200}
                    height={200}/>
            </div>

            <div className={style.containerData}>


                <section>
                    <div className={style.segment}>
                        <span className={'id'}>N°{pokemonData?.id}</span>
                        <h1>{upperCaseText(pokemonData?.name)}</h1>
                    </div>

                    <div className={style.typesContainer}>
                        {
                            pokemonData?.types.map((t, i) => {
                                let color = colors(t)
                                return (
                                    <span style={{backgroundColor: color}}
                                          key={i}>{upperCaseText(t)}</span>
                                )
                            })
                        }
                    </div>

                    <div className={style.segment}>
                        <h4>Pokedex Entry</h4>
                        <p className={style.description}>{upperCaseText(pokemonData?.description)}</p>
                    </div>

                    <div className={style.segment}>
                        <div className={style.dataContainer}>
                            <div>
                                <h4>Height</h4>
                                <span>{pokemonData?.data.height}m</span>
                            </div>
                            <div>
                                <h4>Weight</h4>
                                <span>{pokemonData?.data.weight}kg</span>
                            </div>
                        </div>
                    </div>

                    <div className={style.segment}>
                        <h4>Abilities</h4>
                        <div className={style.dataContainer}>
                            {
                                pokemonData?.abilities.map((t, i) => {
                                    return (
                                        <span key={i}>{upperCaseText(t)}</span>
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className={style.segment}>
                        <h4>Stats</h4>
                        <div className={style.dataContainer}>
                            {
                                pokemonData?.stats.map((s, i) => {
                                    let data = statsName(i)
                                    return (
                                        <div key={i} className={style.stat}>
                                            <div
                                                style={{backgroundColor: data.color}}>
                                                <span>{data.text}</span>
                                            </div>
                                            <span>{s}</span>
                                        </div>

                                    )
                                })

                            }

                        </div>
                    </div>
                    <div className={style.segment}>
                        <h4>Evolutions</h4>
                        <div className={style.dataContainer}>
                            {
                                pokemonData?.evolution.evolutions.map((e) => {
                                    return (
                                        <div key={e.id} className={style.boxEvolution}>
                                            <img
                                                alt={e.name}
                                                src={e.imageUrl}
                                                width={64}
                                                height={64}
                                                onClick={() => fetchPokemonData(e.id)}
                                            />

                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </section>

            </div>

        </aside>
    )
}