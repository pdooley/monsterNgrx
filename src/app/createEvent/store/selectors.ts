import {createFeatureSelector, createSelector} from '@ngrx/store'
import {CreateEventStateInterface} from 'src/app/createEvent/types/createEventState.interface'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'

export const createEventFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateEventStateInterface
>('createEvent')

export const isSubmittingSelector = createSelector(
  createEventFeatureSelector,
  (createEventState: CreateEventStateInterface) =>
    createEventState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  createEventFeatureSelector,
  (createEventState: CreateEventStateInterface) =>
    createEventState.validationErrors
)
