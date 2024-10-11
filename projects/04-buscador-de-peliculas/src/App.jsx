import { useState, useRef, useEffect, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })


  const handleSubmit = (event) => {
    // event.preventDefault()
    // const value = inputRef.current.value
    // console.log(value)

    // const fields = new window.FormData(event.target)
    // const query = fields.get('txtSearch')
    // console.log(query)

    // const fields = Object.fromEntries(new window.FormData(event.target))
    // console.log(fields)

    event.preventDefault()
    // console.log({ search })
    getMovies({ search })
  }

  const debounceGetMovies = useCallback(debounce(search => {
    console.log(search)
    getMovies({ search: search })
  }, 300), [])

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    // getMovies({ search: newSearch })
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }}
            onChange={handleChange}
            value={search}
            name='txtSearch'
            placeholder='Avengers, Start Wars, Matrix...' />
          <input type="checkbox" checked={sort} onChange={handleSort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies}></Movies>}
      </main>
    </div>
  )
}

export default App
