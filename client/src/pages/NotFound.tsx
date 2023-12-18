import Layout from "../components/layout/Layout.tsx";
import style from "./NotFound.module.scss"

export default function NotFound() {
    return (
        <Layout>
            <main className={style.container}>
                <h1>Error 404 - Page Not Found</h1>
                <a href={"/"}>Go Back</a>
            </main>
        </Layout>
    )
}