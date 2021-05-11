import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers';

export const store = createStore(reducers, {}, applyMiddleware(thunk));


// store.dispatch({
//   type: ActionTypes.INSERT_CELL_AFTER,
//   payload: {
//     id: '',
//     type: 'code'
//   }
// })
// store.dispatch({
//   type: ActionTypes.INSERT_CELL_AFTER,
//   payload: {
//     id: '',
//     type: 'text'
//   }
// })
// store.dispatch({
//   type: ActionTypes.INSERT_CELL_AFTER,
//   payload: {
//     id: '',
//     type: 'code'
//   }
// })