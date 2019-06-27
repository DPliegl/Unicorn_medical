import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { featureAdapter, State } from './state';
import { WeatherData } from '../../interfaces/weather-data';

export const featureName = 'weather-data';

export const featureState: MemoizedSelector<object,
  State> = createFeatureSelector<State>(featureName);

export const selectAllMyFeatureItems: (state: object) => WeatherData[] = featureAdapter.getSelectors(featureState).selectAll;
