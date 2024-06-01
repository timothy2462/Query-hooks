
import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [facts, setFacts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('https://catfact.ninja/facts') 
      .then(res => {
        setFacts(res.data.data) 
        setIsLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      <div>
        {facts.map((fact, index) => (
          <p key={index}>{fact.fact}</p>
        ))}
      </div>
    </>
  )
}
