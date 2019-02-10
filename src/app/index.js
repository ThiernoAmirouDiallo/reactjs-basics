/* import React from "react";
import { render } from "react-dom";
//import {Router, Route, browserHistory } from "react-router"
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Root from "./components/Root";
import Home from "./components/Home";
import User from "./components/User";
import Header from "./components/Header";

class App extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Router>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1">
                            <Header />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1">
                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/home"} component={Home}/>
                            <Route path={"/user/:id"} component={User}/>
                        </div>
                    </div>
                </div>


            </Router>
        );
    }
}

render(<App/>,window.document.getElementById("app"))

*/

import { createStore } from "redux";

const initialState= {
    result:1,
    lastValues : []
}

const reducer = (state = initialState, action) => {
  switch (action.type){
      case  "ADD":
          state = {
              ...state,
              result: state.result + action.payload,
              lastValues: [...state.lastValues, action.payload]
          }
          break;

      case "SUBTRACT":
          state = {
              ...state,
              result: state.result - action.payload,
              lastValues: [...state.lastValues, action.payload]
          }
          break;
  }
  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log("Store updated :", store.getState());
});

store.dispatch({
    type: "ADD",
    payload:100
});

store.dispatch({
    type: "ADD",
    payload:22
});

store.dispatch({
    type: "SUBTRACT",
    payload:80
});