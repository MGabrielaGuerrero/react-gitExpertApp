import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  //const categories =["Nozomi", "Mari", "Yohane"];
  const [categories, setcategories] = useState(['Elmo'])

  // const handleAdd = () =>{

  //     setcategories(categories=> [...categories, "Ruby"]);
  // }
  return (
    <>
      <h2> GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}
