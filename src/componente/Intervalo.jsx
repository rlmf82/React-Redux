import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import "./Intervalo.css";
import { changeMin, changeMax } from '../store/actions/actionNumbers';

const Intervalo = props => {

    const { min, max } = props.numeros;

    return (
        <Card red title="Intervalo Números">
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number"
                        value={min}
                        onChange={e => props.changeMininimun(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number"
                        value={max}
                        onChange={e => props.changeMaximun(+e.target.value)} />
                </span>
            </div>
        </Card>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        changeMininimun(novoNumero) {
            //Action creator -> action
            const action = changeMin(novoNumero);
            dispatch(action);
        },
        changeMaximun(novoNumero) {
            //Action creator -> action
            const action = changeMax(novoNumero);
            dispatch(action);
        }
    }
}

const mapStateToProps = state => {
    return {
        numeros: state.numeros
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Intervalo);