import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SearchResultItem } from '../../interfaces/search-result-item';
import { UUID } from 'angular2-uuid';


export const featureAdapter: EntityAdapter<SearchResultItem> = createEntityAdapter<SearchResultItem>({
    selectId: () => UUID.UUID(),
    sortComparer: false
});

export interface State extends EntityState<SearchResultItem> {
    isLoading: boolean;
    error: string | undefined;
}

export const initialState: State = featureAdapter.getInitialState(
    {
        isLoading: false,
        error: undefined
    }
);
