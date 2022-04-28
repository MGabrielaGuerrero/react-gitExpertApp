import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchsGifis = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getGifs(category).then((img) =>
      setTimeout(() => {
        // si el paramentro es [] se ejecuta solo cuando se renderiza el componente
        // al ingresar una valoriable dentro de [] se rendereiza cuando la variable cambia
        setState({
          data: img,
          loading: false,
        })
      }, 3000),
    )
  }, [category])

  return state
}
