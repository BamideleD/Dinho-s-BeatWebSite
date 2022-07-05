import React from "react";
import "./Searchbox.css";




const Searchbox = ({Searchchange}) => {
    return(
        <div className="tr">
            <input 
                className="ba br0 searcher " 
                type='search' 
                placeholder="Search Beats"
                onChange={Searchchange}
            />
        </div>
    )
}


export default Searchbox;