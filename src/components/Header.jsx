import React from "react";
const Header = () =>{
    return(
        <div className="text-ellipsis text-3xl mt-7 mb-6 font-bold  flex items-center justify-between">
            <h2>NoteNote</h2>
            <div className="flex p-1 bg-[#228B22] rounded-lg">
            <img src="/avatar.png" width="30" height="0" alt="" />  
            <button className="text-white rounded-md text-lg">Anonymous</button>
            </div>
        
        </div>
    );
};

export default Header;