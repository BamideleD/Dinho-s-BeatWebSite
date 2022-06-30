import React from "react";
import "./Beat.css"


const Beat = ({title, type, imgalt, imgsrc, beatsrc}) => {
    return(
        <div className="cont" >
            <div className="row">
                <div className="col">
                    <img src= {imgsrc} alt={imgalt} height="100" width="100" />
                    <div className="cha">
                        <b>{title}</b>
                        <p>{type}</p>
                        <audio controls src={beatsrc} type = {"audio/mpeg"}> </audio>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Beat;