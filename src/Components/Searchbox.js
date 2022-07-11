import React from "react";
import "./Searchbox.css";




const Searchbox = ({Searchchange}) => {
    return(
        <div className="tr">
            <input 
                className="ba br0 searcher " 
                type='search' 
                placeholder="search beats"
                onChange={Searchchange}
            />
        </div>
    )
}


export default Searchbox;