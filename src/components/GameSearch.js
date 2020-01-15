import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
      <form onSubmit={props.search}  className="searchForm">
        <input
          className="search"
          placeholder="Search..."
        />
        <input
          type="submit"
          value="SEARCH"
          className="searchBttn"
        
        />
      </form>
    </div>
  )
}

export default SearchBar