import {createStore,combineReducers} from 'redux';
import {timerReducer} from './Reducer';

const Reducer=combineReducers({
    
})


const Store = createStore(timerReducer);


export default Store;
