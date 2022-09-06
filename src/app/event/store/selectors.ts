import {createFeatureSelector, createSelector} from '@ngrx/store'

import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {EventStateInterface} from '../types/eventState.interface'

export const eventFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EventStateInterface
>('event')

export const isLoadingSelector = createSelector(
  eventFeatureSelector,
  (eventState: EventStateInterface) => eventState.isLoading
)

export const errorSelector = createSelector(
  eventFeatureSelector,
  (eventState: EventStateInterface) => eventState.error
)

export const eventSelector = createSelector(
  eventFeatureSelector,
  (eventState: EventStateInterface) => eventState.data
)
