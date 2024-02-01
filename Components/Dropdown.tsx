import React, {useState, useEffect} from 'react'

const Dropdown = ({categories, onSelectCategory}) => {

  return (
    <div>

    <select
      id="categoryDropdown"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category.id}>
          {category}
        </option>
      ))}
    </select>
  </div>
  )
}

export default Dropdown