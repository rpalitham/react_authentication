import React from 'react';
import landscape from "../Images/landscape.png"

export const FileNotFound = () => {
    return(
        <div style={{textAlign:"center"}}>
            <div style={{padding:"5%"}}>404 FILE NOT FOUND</div>
            <img src={landscape}  height="70%" width="70%" alt="img"></img>
        </div>
    )
}