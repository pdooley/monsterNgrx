import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {of} from 'rxjs'

import {CreateEventService} from '../../services/createEvent.service'
import {
  createEventSuccessAction,
  createEventFailureAction,
  createEventAction
} from 'src/app/createEvent/store/actions/createEvent.action'
import {EventInterface} from 'src/app/shared/types/event.interface'

@Injectable()
export class CreateEventEffect {
  createEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createEventAction),
      switchMap(({eventInput}) => {
        return this.createEventService.createEvent(eventInput).pipe(
          map((calendar: CalendarInterface) => {
            return createCalendarSuccessAction({calendar})
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createCalendarFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createCalendarSuccessAction),
        tap(({calendar}) => {
          this.router.navigate(['/calendars', calendar.slug])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private createCalendarService: CreateCalendarService,
    private router: Router
  ) {}
}
