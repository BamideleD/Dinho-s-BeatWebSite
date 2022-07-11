import React, {Component} from "react";
import Beatlist from "../Components/BeatList";
import './App.css';
import Searchbox from "../Components/Searchbox";
import Beatinfo from "../Beatinfo";
import Scroll from "../Components/Scroll";






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
                <Scroll>
                    <Beatlist Beatinfo = {filteredBeatinfo} />
                </Scroll>
                <footer className="tc header pa2"> ALL MUSIC AND SERVICES BELONG AND/OR IS RENDERED BY DINHO </footer>
                
            </div>
        )
    }
}

export default App;