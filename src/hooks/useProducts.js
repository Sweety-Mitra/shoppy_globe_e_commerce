import { useState, useEffect } from 'react'
import { fetchJSON } from '../api'

export default function useProducts(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchJSON('https://dummyjson.com/products')
      .then(data => mounted && setProducts(data.products || []))
      .catch(err => mounted && setError(err.message))
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  return { products, loading, error }
}
