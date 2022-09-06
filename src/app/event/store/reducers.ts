import {createReducer, on, Action} from '@ngrx/store'
import {EventStateInterface} from "../types/eventState.interface";
import {getEventAction, getEventFailureAction, getEventSuccessAction} from "./actions/getEvent.action";


const initialState: EventStateInterface = {
  events: [],
  view: ""
}

const eventReducer = createReducer(
  initialState,
  on(
    getEventAction,
    (state): EventStateInterface => ({
      ...state
    })
  ),
  on(
    getEventSuccessAction,
    (state, action): EventStateInterface => ({
      ...state,
      isLoading: false,
      data: action.event
    })
  ),
  on(
    getEventFailureAction,
    (state): EventStateInterface => ({
      ...state,
      isLoading: false
    })
  ),
  on(routerNavigationAction, (): EventStateInterface => initialState)
)

export function reducers(state: EventStateInterface, action: Action) {
  return calendarReducer(state, action)
}
