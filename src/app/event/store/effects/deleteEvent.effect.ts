import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {of} from 'rxjs'

import {ArticleService} from 'src/app/article/services/article.service'
import {
  deleteArticleAction,
  deleteEventSuccessAction,
  deleteEventFailureAction
} from 'src/app/event/store/actions/deleteEvent.action'
import {Router} from '@angular/router'

@Injectable()
export class DeleteEventEffect {
  deleteEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEventAction),
      switchMap(({slug}) => {
        return this.eventService.deleteEvent(slug).pipe(
          map(() => {
            return deleteEventSuccessAction()
          }),

          catchError(() => {
            return of(deleteEventFailureAction())
          })
        )
      })
    )
  )

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteEventSuccessAction),
        tap(() => {
          this.router.navigate(['/'])
        })
      ),
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private eventService: EventService,
    private router: Router
  ) {}
}
