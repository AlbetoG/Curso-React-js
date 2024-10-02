import { useState } from 'react'
import { getRandomFact } from '../services/fact'

export const useCatFact = () => {
  const [fact, setFact] = useState()
  const refreshFact = () => {
    getRandomFact().then((res) => { setFact(res) })
  }
  return { fact, refreshFact }
}
