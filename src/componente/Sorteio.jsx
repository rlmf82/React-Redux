import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Sorteio = props => {

    const {min, max} = props.numeros;
    const sorteio = parseInt(Math.random() * (max-min)) + min;

    return (
        <Card purple title="Sorteio dos números">
                <span>
                    <span>Resultado: </span>
                    <strong>{sorteio}</strong>
                </span>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Sorteio);