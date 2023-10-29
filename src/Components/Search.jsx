import React from 'react'
import {ImSearch} from 'react-icons/im';
import { useSearch } from './Context';

function Search() {
    const {search,setSearch}= useSearch( );
    const searchItem = (searchval) => {
        setSearch(searchval);
        // console.log(search);
    }

  return (
    <div className='searchbar'>
        <input  placeholder='Search platforms....' onChange={(e)=>(searchItem(e.target.value))} value={search}></input>
        < ImSearch/>
    </div>
  )
}

export default Search
