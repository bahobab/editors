import { Cell } from '../cell';
import { ActionTypes } from '../action-types';
import {Action} from '../actions'

interface CellsState {
  loading: boolean;
  error: string | null;
  order: [];
  data: {
    [key:string]: Cell
  }
};

const initialState = {
  loading: false,
  error: null,
  order: [],
  data: {}
}

const cellReducer = (state: CellsState, action: Action): CellsState =>{
  switch (action.type) {
    case ActionTypes.UPDATE_CELL: {
      return state;
    }
    case ActionTypes.MOVE_CELL: {
      return state;
    }
    case ActionTypes.DELETE_CELL: {
      return state;
    }
    case ActionTypes.INSERT_CELL_BEFORE: {
      return state;
    }
    default: return state;
  }
}

export default cellReducer;

