import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
const Soma = props => {

    //const {min, max} = props;
    const {min, max} = props.numeros;

    return (
        <Card blue title="Soma dos números">
                <span>
                    <span>Resultado: </span>
                    <strong>{min+max}</strong>
                </span>
        </Card>
    );
}


const mapStateToProps = state => {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Soma);