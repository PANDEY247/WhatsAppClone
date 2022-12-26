import React from 'react';
import { Avatar,  IconButton } from "@mui/material"
// import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import AttachFile from '@mui/icons-material/AttachFile';
import MoreVert from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import "./Chat.css";
export function Chat(){
    return (
        <div className='chat'>
        <div className='chat_header'>
    <Avatar src={`https://avatars.dicebear.com/api/human/$seed.svg`}/>

    <div className="chat_headerInfo">
        <h3>Room name</h3>
        <p>Last seen at.....</p>
    </div>
   
   <div className='chat_headerRight'>
    <IconButton>
        <SearchIcon/>
    </IconButton>
    <IconButton>
        <AttachFile/>
    </IconButton>
    <IconButton>
        <MoreVert/>
    </IconButton>
   </div>
        </div>
        <div className="chat_body"></div>
            <div className="chat footer">

            </div>
        </div>
            
        
        
    );

};
