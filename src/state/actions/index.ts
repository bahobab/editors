import { ActionTypes } from '../action-types';
import { Cell, CellTypes } from '../cell';
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

export interface InsertCellAfterAction {
  type: ActionTypes.INSERT_CELL_AFTER;
  payload: {
    id: string | null,
    type: CellTypes
  }
};
export interface BundleStartAction {
  type: ActionTypes.BUNDLE_START,
  payload: {
    cellId: string
  }
};
export interface BundleComplete {
  type: ActionTypes.BUNDLE_COMPLETE,
  payload: {
    cellId: string,
    bundle: {
      code: string,
      err: string
    }
  }
};
export interface FetchCellsCompletedAction {
  type: ActionTypes.FETCH_CELLS_COMPLETED;
  payload: Cell[];
};
export interface FetchCellsStartedAction {
  type: ActionTypes.FETCH_CELLS_STARTED;
};

export interface FetchCellsErroredAction {
  type: ActionTypes.FETCH_CELLS_ERRORED;
  payload: string;
}

export interface SaveCellsAction {
  type: ActionTypes.SAVE_CELLS_ERROR;
  payload: string;
}

export type Action =
  MoveCellAction |
  DeleteCellAction |
  UpdateCellAction |
  InsertCellAfterAction |
  BundleStartAction |
  BundleComplete |
  FetchCellsCompletedAction |
  FetchCellsStartedAction |
  FetchCellsErroredAction |
  SaveCellsAction;


export type Direction = 'up' | 'down';
