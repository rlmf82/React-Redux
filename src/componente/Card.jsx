import './Card.css';
import React from 'react';
import { connect } from 'react-redux';

function getColor(props){
    if(props.red){ return "Red"}
    if(props.green){ return "Green"}
    if(props.blue){ return "Blue"}
    if(props.purple){ return "Purple"}
}

const Card = props => {

    return (
        <div className={`Card ${getColor(props)}`} >
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>);
}

const mapStateToProps = state => {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Card);