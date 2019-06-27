import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { featureAdapter, State } from './state';
import { SearchResultItem } from '../../interfaces/search-result-item';

export const featureName = 'search-data';

const getIsLoading = (state: State): boolean => {
    return state.isLoading;
};

export const featureState: MemoizedSelector<object,
    State> = createFeatureSelector<State>(featureName);

export const selectAllMyFeatureItems: (state: object) => SearchResultItem[] = featureAdapter.getSelectors(featureState).selectAll;


export const selectAllMyFeatureItemsWithQuery = (query: string) => createSelector(
    featureState,
    selectAllMyFeatureItems,
    (state, searchResultItems: Array<SearchResultItem>) => searchResultItems.filter((item: SearchResultItem) => item.keyword === query)
);

export const IsLoading: MemoizedSelector<object,
    boolean> = createSelector(featureState, getIsLoading);
