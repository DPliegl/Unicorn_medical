import { Action } from '@ngrx/store';
import { WeatherData } from '../../interfaces/weather-data';

export enum ActionTypes {
  LOAD_REQUEST = '[WeatherData] Load Request',
  LOAD_FAILURE = '[WeatherData] Load Failure',
  LOAD_SUCCESS = '[WeatherData] Load Success',
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;

  constructor(public payload: string) {
  }
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: WeatherData[]) {
  }
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
