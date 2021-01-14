import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

const Media = props => {
    const {min, max} = props.numeros;
    return (
        <Card green title="Média dos números">
                <span>
                    <span>Resultado: </span>
                    <strong>{(min+max)/2}</strong>
                </span>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Media);