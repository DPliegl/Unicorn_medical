import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Effects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('search-data', featureReducer),
    EffectsModule.forFeature([Effects])
  ],
  declarations: []
})
export class SearchDataStoreModule {
}

