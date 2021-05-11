import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from '../action-types';
import { Cell, CellTypes } from '../cell';
import {
  UpdateCellAction,
  DeleteCellAction,
  MoveCellAction,
  InsertCellAfterAction,
  Direction,
  Action
} from '../actions';
import bundle from '../../bundler';
import { RootState } from '../reducers/index';

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionTypes.MOVE_CELL,
    payload: {
      direction,
      id
    }
  }
}

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionTypes.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  }
}

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionTypes.DELETE_CELL,
    payload: id
  }
}

export const insertCellAfter = (id: string | null, type: CellTypes): InsertCellAfterAction => {
  return {
    type: ActionTypes.INSERT_CELL_AFTER,
    payload: {
      id,
      type
    }
  }
}
export const createBundle = (cellId: string, input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.BUNDLE_START,
      payload: {
        cellId,
      }
    });

    const result = await bundle(input);

    dispatch({
      type: ActionTypes.BUNDLE_COMPLETE,
      payload: {
        cellId,
        bundle: result
      }
    })
  };
}

export const fetcCellsCompleted = () => {
  return async (dispatch: Dispatch<Action>) => {

    dispatch({type: ActionTypes.FETCH_CELLS_STARTED})

    try {
      const { data }: { data: Cell[] } = await axios.get('/cells');
      dispatch({
        type: ActionTypes.FETCH_CELLS_COMPLETED,
        payload: data
      });
      
    } catch (err) {
      dispatch({
        type: ActionTypes.FETCH_CELLS_ERRORED,
        payload: err.message
      });
    }
  }
}

export const fetCellsErrored = () => {
  return {
    type: ActionTypes.FETCH_CELLS_ERRORED
  }
}

export const saveCells = () => {
  return async (dispatch: Dispatch<Action>, getSate: () => RootState) => {
    const { cells: { data, order } } = getSate();

    const cells = order.map(id => data[id]);

    try {
      await axios.post('/cells', { cells });
    } catch (err) {
      dispatch({
        type: ActionTypes.SAVE_CELLS_ERROR,
        payload: err.message
      })
    }
  }
  }
