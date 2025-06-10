import React from "react";

const IconButton = ({Icon, onClick}) => {
    <span className="cursor-pointer flex items-centerspace-x-2" 
    onClick={onClick}>
        <Icon size={22}/>
    </span>
}

export default IconButton;