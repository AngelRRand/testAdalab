import React from "react";
import style from "./Aside.module.scss"
import {asideType} from "../../interface";

export default function Aside({pokemonData}: asideType) {


    return (
        <aside className={style.container}>
            <h1></h1>
        </aside>
    )
}