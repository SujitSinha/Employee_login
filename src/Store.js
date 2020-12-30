import {createStore} from 'redux';
import loginReducer from './Reducers/loginReducer'

const store=createStore(loginReducer);

export default store;