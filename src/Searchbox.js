import React from "react";
import "./Searchbox.css";



const Searchbox = () => {
    return(
        <div className="tr">
            <input 
                className="ba br0 searcher " 
                type='search' 
                placeholder="Search Beats"
            />
        </div>
    )
}


export default Searchbox;