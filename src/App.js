import React, { Component } from "react";
import Cons from "./components/Cons";
import Pros from "./components/Pros";
import './styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <p>Should I eat at McDonalds?</p>
                </div>
                <Pros/>
                <Cons/>
            </div>
         );
    }
}

export default App;