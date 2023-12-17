import style from "./Card.module.scss"
import {colors} from "../../helper";
import {pokemonCard} from "../../interface";

export default function Card({name, imageUrl, types, id, fetchPokemonData}: pokemonCard) {
    return (
        <article className={style.card} onClick={() => fetchPokemonData(id)}>
            <div className={style.containerImg}>
                <img src={imageUrl} width={96} height={96} alt={name}/>
            </div>
            <div className={style.dataContainer}>

                <p className={'id'}>N°{id}</p>
                <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>

                <div className={style.typesContainer}>
                    {
                        types.map((t, i) => {
                            let color = colors(t)
                            return (
                                <span style={{backgroundColor: color}}
                                      key={i}>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                            )
                        })
                    }
                </div>
            </div>

        </article>
    )
}