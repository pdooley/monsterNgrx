import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'

import {EventService as SharedEventService} from 'src/app/shared/services/event.service'
import {
  getEventAction,
  getEventSuccessAction,
  getEventFailureAction
} from '../actions/getEvent.action'
import {EventInterface} from 'src/app/shared/types/event.interface'

@Injectable()
export class GetEventEffect {
  getEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEventAction),
      switchMap(({slug}) => {
        return this.sharedEventService.getEvent(slug).pipe(
          map((event: EventInterface) => {
            return getEventSuccessAction({calendar})
          }),

          catchError(() => {
            return of(getCalendarFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private sharedCalendarService: SharedCalendarService
  ) {}
}
