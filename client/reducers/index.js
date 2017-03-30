import {combineReducers} from 'redux';
import Userreducer from './Userreducer';
import Activeuser from './Activeuser';

const allReducer=combineReducers({
	Users:Userreducer,
	Activeuser:Activeuser
});

export default allReducer;