import React  from 'react';
import { Avatar } from '@mui/material/';
import './SidebarChat.css';


export function SidebarChat({addNewChat}) {

    const createChat=() =>{
        // const roomName = prompt("please enter name for chat");

    };

//    if (roomName){
//     // do some clever database stuff...
//    }

    return !addNewChat? (
    <div className='sidebarChat'>
    <Avatar src={`https://avatars.dicebear.com/api/human/$seed.svg`}/>
    <div className='sidebarChat_info'>
    <h2>room Name</h2>
    <h3>Hey...</h3>
    </div>
    
   

    </div>
    ): (
       <div onClick={createChat}
       className="sidebarChat">
       <h2>Add new Chat</h2>
       </div> 
    );

}

