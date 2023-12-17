import style from "./Layout.module.scss"
import {LayoutProps} from "../../interface";
import {useEffect, useRef} from "react";


export default function Layout({currentPage, setCurrentPage, children}: LayoutProps) {

    const listContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const container = listContainerRef.current;

            if (container && container.scrollTop + container.clientHeight >= container.scrollHeight - 100) {
                setCurrentPage(currentPage += 1);
            }
        };

        if (listContainerRef.current) {
            const container = listContainerRef.current;
            container.addEventListener('scroll', handleScroll);

            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, [currentPage, setCurrentPage, listContainerRef]);


    return (
        <main className={style.container} ref={listContainerRef}>
            {children}
        </main>

    )
}