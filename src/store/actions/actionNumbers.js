
import {NUM_MAX_ALTERADO, NUM_MIN_ALTERADO} from './actionTypes';

//Action creator
export function changeMin(newMin){
    return {
        type: NUM_MIN_ALTERADO,
        payload: newMin
    }
}

export function changeMax(newMax){
    return {
        type: NUM_MAX_ALTERADO,
        payload: newMax
    }
}