import {CreateEventStateInterface} from '../types/createEventState.interface'
import {createReducer, on, Action} from '@ngrx/store'
import {
  createEventAction,
  createEventSuccessAction,
  createEventFailureAction
} from './actions/createEvent.action'

const initialState: CreateEventStateInterface = {
  isSubmitting: false,
  validationErrors: null
}

const createEventReducer = createReducer(
  initialState,
  on(
    createEventAction,
    (state): CreateEventStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),

  on(
    createEventSuccessAction,
    (state): CreateEventStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),

  on(
    createEventFailureAction,
    (state, action): CreateEventStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
)

export function reducers(state: CreateEventStateInterface, action: Action) {
  return createEventReducer(state, action)
}
