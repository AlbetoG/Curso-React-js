function ListOfMovies({ movies }) {
    return (
        <ul className="movies">
            {movies.map(movie => (
                <li className="movie" key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={`Poster image from ${movie.title}`} />
                </li>
            ))}
        </ul>
    )
}

function NoMoviesResult() {
    return (
        <p> No se encontraron películas para la búsqueda <strong>input..</strong></p>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResult />
    )
}