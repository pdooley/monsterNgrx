import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {EventInputInterface} from 'src/app/shared/types/eventInput.interface'
import {EventInterface} from 'src/app/shared/types/event.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

export const createEventAction = createAction(
  ActionTypes.CREATE_EVENT,
  props<{eventInput: EventInputInterface}>()
)

export const createEventSuccessAction = createAction(
  ActionTypes.CREATE_EVENT_SUCCESS,
  props<{event: EventInterface}>()
)

export const createEventFailureAction = createAction(
  ActionTypes.CREATE_EVENT_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
