import { Link } from "../Link";

export default function Page404() {
    return (
        <>
            <h1>ERROR - 404</h1>
            <p>
                Page Not Found 😥
            </p>
            <Link to="/">Ir al inicio</Link>
        </>
    )
}