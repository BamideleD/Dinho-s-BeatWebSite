import React from "react";
import Beat from "./Beat";
import './Beatlist.css';



const Beatlist = ({Beatinfo}) => {
    return(
        <div className="row">
            {
                Beatinfo.map((user, i) => {
                    return(
                     <Beat key = {i} title = {Beatinfo[i].title} type = {Beatinfo[i].type} imgalt = {Beatinfo[i].imgalt} imgsrc = {Beatinfo[i].imgsrc} beatsrc = {Beatinfo[i].beatsrc} />
                    )
        
                })
            }
        </div>
    )
}


export default Beatlist;