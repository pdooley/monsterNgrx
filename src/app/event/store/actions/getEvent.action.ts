import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {EventInterface} from 'src/app/shared/types/event.interface'

export const getEventAction = createAction(
  ActionTypes.GET_EVENT,
  props<{slug: string}>()
)

export const getEventSuccessAction = createAction(
  ActionTypes.GET_EVENT_SUCCESS,
  props<{event: EventInterface}>()
)

export const getEventFailureAction = createAction(
  ActionTypes.GET_EVENT_FAILURE
)
