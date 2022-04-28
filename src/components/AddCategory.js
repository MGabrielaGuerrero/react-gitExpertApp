import React, { useState } from 'react'
import propTypes from "prop-types"

export const AddCategory = ({ setcategories }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmint = (e) => {
    e.preventDefault()
    if(inputValue.trim().length > 2){
        setcategories((category) => [ inputValue, ...category]);
        setInputValue("");

    }
  }
  return (
    <form onSubmit={handleSubmint}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  )
}

AddCategory.propTypes = {
    setcategories: propTypes.func.isRequired
}
