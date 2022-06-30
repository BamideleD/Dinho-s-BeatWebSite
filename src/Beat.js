import React from "react";
import "./Beat.css"


const Beat = () => {
    return(
        <div className="BackgroundColor grow bw2 shadow-5">
            <img 
                src="https://lastfm.freetls.fastly.net/i/u/770x0/2bf9fbd3acae7f9a5615adbd71f6c7f6.jpg" alt="Little Simz" height="100" width="100" />
            <div className="cha">
                <b>SWING</b>
                <p>(Little Simz Type beat)</p>
                <audio controls src="Swing Part 2.mp3" type = {"audio/mpeg"}> </audio>
            </div>
        </div>
    )
}



export default Beat;