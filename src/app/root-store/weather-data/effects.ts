import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as featureActions from './actions';
import { SearchService } from '../../core/services/search.service';


@Injectable()
export class Effects {

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    switchMap(() =>
      this.searchService
        .getWeatherData()
        .pipe(
          map(
            weatherData => {
              return new featureActions.LoadSuccessAction(weatherData);
            }
          ),
          catchError(error =>
            observableOf(new featureActions.LoadFailureAction(error))
          )
        )
    )
  );

  constructor(private readonly searchService: SearchService, private readonly actions$: Actions) {
  }

}
