import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as featureActions from './actions';
import { SearchService } from '../../core/services/search.service';
import { SearchResultItem } from '../../interfaces/search-result-item';


@Injectable()
export class Effects {

    @Effect()
    loadRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.LoadRequestAction>(
            featureActions.ActionTypes.LOAD_REQUEST
        ),
        mergeMap((action: featureActions.LoadRequestAction) =>
            this.searchService.search(action.payload)
                .pipe(
                    map(
                        (searchData: SearchResultItem[]) => {
                            return new featureActions.LoadSuccessAction(searchData);
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
