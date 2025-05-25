import React from 'react'
import { MdSearch } from 'react-icons/md'

function Header({handleToggle,handleSearchNote}) {
  return (
    <div>
    <div className='header'>
        <h1>Notes</h1>


          <div className='search'>
              <MdSearch className='search-icons' size='1.3rem'/>
              <input onChange={(event)=> handleSearchNote(event.target.value)} 
              type='search' placeholder='Search notes'/>
        
            </div>
            {/*

           
      <button onClick={()=> handleToggle(
            (prevToggle)=>!prevToggle
        )

        }   className='save'>Toggle Theme</button> 
           
 

       //NOTE: This portion is meant for toogle for theme  
        
        */ 
        
        }

    
    </div>
 <div className='headerbelow'>
        <h3 >Your Notes</h3>
        <h3> Select month</h3>
      
    </div>
    </div>
  )
}

export default Header
