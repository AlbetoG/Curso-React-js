import { useEffect, useState } from 'react'

// CUSTOM HOOK -> debe de empezar con la plabra 'use'
export function useCatImage ({ fact }) {
  const [imageId, setImageId] = useState()
  useEffect(() => {
    if (!fact) return
    // const firstWord = fact.split(' ').sline(0, 3).join(' ')
    const firstThreeWords = fact.split(' ', 3).join(' ')
    // The param url no exist in the object
    // fetch(`https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`)
    //   .then(res => res.json())
    //   .then(response => {
    //     const { _id } = response
    //     setImageId(_id)
    //   })
    const urlImage = `https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`
    setImageId(urlImage)
  }, [fact])

  return { imageId }
}
