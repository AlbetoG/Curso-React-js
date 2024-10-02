import { useEffect } from 'react'
import './app.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageId } = useCatImage({ fact })

  // Recupera al cargar página
  useEffect(() => {
    refreshFact()
  }, [])

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App</h1>
      {fact && <p> {fact} </p>}
      {imageId && <img src={imageId} alt={`image building by first three works for ${fact}`} />}
      <button onClick={handleClick}> Refesh </button>
    </main>
  )
}
