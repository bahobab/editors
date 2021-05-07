import { ActionTypes } from '../action-types';
import { CellTypes } from '../cell';

export interface MoveCellAction {
  type: ActionTypes.MOVE_CELL;
  payload: {
    id: string,
    direction: Direction
  }
}

export interface UpdateCellAction {
  type: ActionTypes.UPDATE_CELL;
  payload: {
    id: string,
    content: string
  }
}

export interface DeleteCellAction {
  type: ActionTypes.DELETE_CELL;
  payload: string
}

export interface InsertCellBeforeAction {
  type: ActionTypes.INSERT_CELL_BEFORE;
  payload: {
    id: string,
    type: CellTypes
  }
}

export type Action =
  MoveCellAction |
  DeleteCellAction |
  UpdateCellAction |
  InsertCellBeforeAction

export type Direction = 'up' | 'down';
