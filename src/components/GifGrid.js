import React from 'react'
import { useFetchsGifis } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([])

  const { data: images, loading } = useFetchsGifis(category)

  return (
    <>
      <h3 className='animate__animated animate__rollIn'> {category}</h3>
      {/* && funciona como un if  */}
      {loading && 'Cargando...'} 
      <div className="card-grid animate__animated animate__flip">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}
