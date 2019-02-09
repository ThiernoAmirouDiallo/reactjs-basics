import React from "react";
import PropTypes from 'prop-types';

export default class Home extends React.Component
{
    constructor(props){
        super();

        this.state= {
            age:props.initialAge,
            status:0,
            homeLink: props.initialLinkName
        }
    }

    onChangeLinkName(){
        this.props.changeLink(this.state.homeLink);
    }
    onHandleChanged(event){
        this.setState({
            homeLink:event.target.value
        })
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
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input value={this.state.homeLink} onChange={(e) => {this.onHandleChanged(e)}} type="text"/>
                <button onClick={this.onChangeLinkName.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    changeLink: PropTypes.func,
    initialLinkName: PropTypes.string
}
