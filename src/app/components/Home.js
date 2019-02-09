import React from "react";
import PropTypes from 'prop-types';

export default class Home extends React.Component
{
    constructor(props){
        super();

        this.state= {
            age:props.initialAge,
            status:"initialVal"
        }
    }

    onMakeOlder() {
        this.setState({
            age:this.state.age+3
        })
        console.log(this.age);
    }

    render(){
        return (
            <div>
                <p>In a new component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number
}
