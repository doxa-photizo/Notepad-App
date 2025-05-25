import React from 'react'
import { MdDelete, MdEmail, MdLock, MdOutlineRecycling, MdRestore,  } from 'react-icons/md';



const SideBarData =[

{
Name:'Recent',
icon: <MdRestore/>,
link:"./Recet",

},
{
    Name:'Private',
    icon: <MdLock/>,
    link:"./Private",
    
    },
    {
        Name:'Recycle',
        icon: <MdOutlineRecycling/>,
        link:"./Home",
        
        },

        {
            Name:'Trash',
            icon: <MdDelete/>,
            link:"./Trash",
            
            },

];
export default SideBarData
