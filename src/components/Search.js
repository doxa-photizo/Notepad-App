import React from 'react'
import { MdSearch } from 'react-icons/md'

function Search({handleSearchNote}) {
  return (
    <div className='search'>
      <MdSearch className='search-icons' size='1.3rem'/>
      <input onChange={(event)=> handleSearchNote(event.target.value)} 
      type='search' placeholder='Search notes'/>

    </div>
  )
}

export default Search
