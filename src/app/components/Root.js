import React from "react";

import Header from "./Header";

export default class Root extends React.Component
{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1">
                        <Header />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}



