import React from "react";
import Beat from "./Beat";
import Beatinfo from "./Beatinfo";
import './Beatlist.css';



const Beatlist = () => {
    return(
        <div className="">
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