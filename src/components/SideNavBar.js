import React from 'react'
import SideBarData from './SideBarData'
import { MdArrowBack, MdArrowForward, MdList, MdListAlt, MdPerson2 } from 'react-icons/md'


function SideNavBar({handleCollapse,isCollapsed}) {





  return (
    <div className='sidebar'> 


<div className='row1'>
<MdPerson2 size='2.5rem'/>
 <h3 > Vashti Frimpong</h3> 
<div  > 
  <MdList className='arrow-back'  onClick={()=>handleCollapse(false)}/> 
<MdListAlt  className='arrow-forward' onClick={()=> handleCollapse(true)}/>
  </div>
</div>

<div className='row2'>
<ul>

     {SideBarData.map((item,index)=>
      <li key={index} className='row' onClick={()=>window.location.pathname = item.link}> 
  {item.icon}
  <span className="sidebar-text">{item.Name}</span>
</li>

     )}
   
</ul>
     

 
<button>Create new</button>
</div>

      
    </div>
  )
}

export default SideNavBar
