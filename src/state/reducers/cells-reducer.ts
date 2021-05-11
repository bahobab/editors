import produce from 'immer';

import { Cell } from '../cell';
import { ActionTypes } from '../action-types';
import {Action} from '../actions'

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key:string]: Cell
  }
};

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {}
}

const cellsReducer = produce((state: CellsState=initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_CELL: {

      // return {
      //   ...state, data:{
      //     ...state.data,
      //     [action.payload.id]: {
      //       ...state.data[action.payload.id],
      //       content:action.payload.content
      //     }
      //   }
      // }
      state.data[action.payload.id].content = action.payload.content;
      return state;
    }
    case ActionTypes.MOVE_CELL: {
      const { direction} = action.payload;
      const index = state.order.findIndex(id => id === action.payload.id);

      const targetIndex = direction === 'up' ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return state;
      }

      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = action.payload.id;
      return state;
    }
      
    case ActionTypes.DELETE_CELL: {
      delete state.data[action.payload];
      state.order = state.order.filter(id => id !== action.payload)
      return state;
    }
      
    case ActionTypes.INSERT_CELL_AFTER: {
      const cell: Cell = {
        id: randomId(),
        type: action.payload.type,
        content: '',
      };

      state.data[cell.id] = cell;

      const insertionIndex = state.order.findIndex(id => id === action.payload.id);

      if (insertionIndex < 0) {
        state.order.unshift(cell.id);
      } else {
        state.order.splice(insertionIndex + 1, 0, cell.id)
      }

      return state;
    }
      
    case ActionTypes.FETCH_CELLS_STARTED: {
      state.loading = true;
      state.error = null;
      return state;
    }
      
    case ActionTypes.FETCH_CELLS_COMPLETED: {
      state.order = action.payload.map(cell => cell.id);
      state.data = action.payload.reduce((acc, cell) => {
        acc[cell.id] = cell;
        return acc;
      }, {} as CellsState['data'])
      return state;
    }
      
    case ActionTypes.FETCH_CELLS_ERRORED: {
      state.loading = false;
      state.error = action.payload;
      return state;
    }
      
    
    default: return state;
  }
}, initialState);

const randomId = () => {
  const rand =Math.random().toString(36).substr(2, 5);
  return rand;
};

export default cellsReducer;

