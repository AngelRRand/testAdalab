import {ReactNode} from 'react';
import style from "./Layout.module.scss"

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <main className={style.container}>
            {children}
        </main>

    )
}