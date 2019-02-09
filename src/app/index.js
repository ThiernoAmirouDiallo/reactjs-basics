import React from "react";
import { render } from "react-dom";

import Header from "./components/Header";
import Home from "./components/Home";

class App extends React.Component
{
    constructor(){
        super();
        this.state={
            homeLink : "Home"
        }
    }

    onGreet(){
        alert("Hello")
    }

    onChangeLinkName(newLinkName){
        this.setState({
            homeLink:newLinkName
        })
    }
    render(){

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1">
                        <Home
                            name={"Max"}
                            initialAge={27}
                            greet={this.onGreet}
                            changeLink={this.onChangeLinkName.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"))