import { Action } from '@ngrx/store';
import { SearchResultItem } from '../../interfaces/search-result-item';

export enum ActionTypes {
  LOAD_REQUEST = '[SearchData] Load Request',
  LOAD_FAILURE = '[SearchData] Load Failure',
  LOAD_SUCCESS = '[SearchData] Load Success',
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
  constructor(public payload: string) {
  }
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;

  constructor(public payload: string) {
  }
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: SearchResultItem[]) {
  }
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
