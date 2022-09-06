import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'

export const deleteEventAction = createAction(
  ActionTypes.DELETE_EVENT,
  props<{slug: string}>()
)

export const deleteEventSuccessAction = createAction(
  ActionTypes.DELETE_EVENT_SUCCESS
)

export const deleteEventFailureAction = createAction(
  ActionTypes.DELETE_EVENT_FAILURE
)
