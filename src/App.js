import React, {Component} from "react";
import Beatlist from "./BeatList";
import './App.css';
import Searchbox from "./Searchbox";
import Beatinfo from "./Beatinfo";






class App extends Component {
    constructor(){
        super()
        this.state = {
            Beatinfo : Beatinfo,
            Searchfield : ""
        }
    }

    onsearchChange = (event) => {
        this.setState({Searchfield : event.target.value})
    }
    render(){
        const filteredBeatinfo = this.state.Beatinfo.filter(Beatinfo => {
            return Beatinfo.title.toLowerCase().includes(this.state.Searchfield.toLowerCase()) || Beatinfo.type.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        })
        return (
            <div>
                <h1 className ="tc header">
                    <div>
                        🗿
                    </div>
                    <div className="pa1">
                        DINHO'S BEATS
                    </div>
                </h1>
                <Searchbox Searchchange = {this.onsearchChange}/>
                <Beatlist Beatinfo = {filteredBeatinfo} />
                <footer className="tc header"> ALL MUSIC AND SERVICES BELONG AND/OR IS RENDERED BY DINHO </footer>
                
            </div>
        )
    }
}

export default App;