"use client"
import React, { useState } from 'react'
import { SearchManufacturer } from '.'

const SearchBar = () => {
  const[manuacturer, setManufacturer] = useState('')
    const handleSearch=()=>{

    }
  return (
   <form className='searchbar' onSubmit={handleSearch}>
<div className='searchbar__item'>
<SearchManufacturer manuacturer={manuacturer} setManufacturer={setManufacturer}/>
</div>
   </form>
  )
}

export default SearchBar
