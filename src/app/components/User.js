import React from "react";

class User extends React.Component
{

    onNavigateHome(){
        this.props.history.push("/home")
    }
    render(){
        return (
            <div>
                <h3>The User page</h3>
                <p>User ID : {this.props.match.params.id}</p>

                <button onClick={this.onNavigateHome.bind(this)} className={"btn btn-primary"}>Go Home</button>
            </div>
        );
    }
}


export default User;

