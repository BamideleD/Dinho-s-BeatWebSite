import React from "react";
import Beatlist from "./BeatList";
import './App.css';






const App = () => {
    return (
        <div>
            <h1 className ="tc header">
            🗿 DINHO'S BEATS
            </h1>
            <div className="">
                <Beatlist />
            </div>
            <footer className="tc header"> ALL MUSIC AND SERVICES BELONG AND/OR IS RENDERED BY DINHO </footer>
            
        </div>
    )
}

export default App;