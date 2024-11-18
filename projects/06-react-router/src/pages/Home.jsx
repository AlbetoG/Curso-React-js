import { Link } from '../Link.jsx'

export default function HomePage() {
    return (
        <>
            <h1>
                Home
            </h1>
            <p>
                Página de ejemplo para crear un proyecto como react router
            </p>
            <Link to="/about">Sobre nosotros</Link>
        </>
    )
}