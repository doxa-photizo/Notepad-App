import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';



function Note( {id,text,date,handleDeleteNote}) {
  return (

    <div className='allnotes'>
 <Link to={`/notes/${id}`} className="notelink">

     <div className="note">
<span>{text}</span>

<div className='note-footer'>
<small>{date}</small>
<MdDeleteForever onClick={(e)=>{ e.preventDefault();
handleDeleteNote(id);}}
 className="delete-icon"
  size="1.3rem"/>
</div>


    </div>
    </Link>


    </div>
   
  )
}

export default Note
