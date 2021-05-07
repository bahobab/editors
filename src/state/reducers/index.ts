import {combineReducers} from 'redux'
import cellReducer from './cells-reducer';

const reducers = combineReducers({
  cellReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;