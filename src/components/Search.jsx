import React from "react";
import { MdSearch } from "react-icons/md";

const Search =({handleSearchNote})=>{
    return( <div className="flex items-center bg-gray-300 rounded-lg p-1 mt-2 mb-6">
        <MdSearch className="search-icons" size="1.3em"/>
        <input className="bg-gray-300 focus:outline-none" onChange={(event)=>
        handleSearchNote(event.target.value)}
        type="text"
        placeholder="Type to search......"/>
    </div>
);
};

export default Search;