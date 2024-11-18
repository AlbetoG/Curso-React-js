import { useEffect } from "react"

export default function SearchPage({ routerParams }) {

    useEffect(() => {
        document.title = `Buscando ${routerParams.query}`
    }, [])

    return (
        <h1>Buscando {routerParams.query}</h1>
    )
}