import React from "react";
import PropTypes from 'prop-types';

export default class Home extends React.Component
{
    render(){
        return (
            <div>
                <p>In a new component!</p>
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>

            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
