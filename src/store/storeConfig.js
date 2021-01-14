import { createStore, combineReducers } from 'redux';
import reducerNumbers from './reducers/reducerNumbers';

const reducers = combineReducers({
    numeros: reducerNumbers,
    nomes: function(state, action){
        return ['Rafa', 'Flávia', 'Alice']
    }
});

function storeConfig(){
    return createStore(reducers);
}

export default storeConfig;