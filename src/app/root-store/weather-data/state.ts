import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { WeatherData } from '../../interfaces/weather-data';
import { UUID } from 'angular2-uuid';


export const featureAdapter: EntityAdapter<WeatherData> = createEntityAdapter<WeatherData>({
    selectId: () => UUID.UUID(),
    sortComparer: false
});

export interface State extends EntityState<WeatherData> {
    isLoading: boolean;
    error: string | undefined;
}

export const initialState: State = featureAdapter.getInitialState(
    {
        isLoading: false,
        error: undefined
    }
);
