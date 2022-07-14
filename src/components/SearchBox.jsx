import React from 'react'
import './SearchBox.css'

const SearchBox = ({ handleSearchChange }) => {
  return (
    <div className="search-box">
      <input
        type="search"
        placeholder="search Robots"
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default SearchBox
