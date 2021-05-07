import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import {ActionTypes} from './action-types'

export const store = createStore(reducers, {}, applyMiddleware());


store.dispatch({
  type: ActionTypes.INSERT_CELL_BEFORE,
  payload: {
    id: '',
    type: 'code'
  }
})
store.dispatch({
  type: ActionTypes.INSERT_CELL_BEFORE,
  payload: {
    id: '',
    type: 'text'
  }
})
store.dispatch({
  type: ActionTypes.INSERT_CELL_BEFORE,
  payload: {
    id: '',
    type: 'code'
  }
})