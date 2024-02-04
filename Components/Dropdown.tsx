import React, {useState, useEffect} from 'react'

type PropsType = {
  categories: string[];
  onSelectCategory: (newCat: string) => void;
};

const Dropdown = ({categories, onSelectCategory}: PropsType) => {

  return (
    <div>

    <select
      id="categoryDropdown"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (

        <option key={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
  )
}

export default Dropdown